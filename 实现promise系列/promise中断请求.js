let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 模拟接口调用 ajax调用超时
    resolve("成功");
  }, 10000);
});

function promiseWrap(promise) {
  // 包装一个promise 可以控制原来的promise是成功 还是失败
  let abort;
  let newPromsie = new Promise((resolve, reject) => {
    abort = reject;
  });
  // 只要控制newPromsie失败，就可以控制被包装的promise走向失败
  // Promise.race 任何一个先成功或者失败 就可以获得结果
  let p = Promise.race([promise, newPromsie]);
  p.abort = abort;

  return p;
}

let newPromise = promiseWrap(promise);

setTimeout(() => {
  // 超过3秒超时
  newPromise.abort("请求超时");
}, 3000);

newPromise
  .then((d) => {
    console.log("d", d);
  })
  .catch((err) => {
    console.log("err", err);
  });
