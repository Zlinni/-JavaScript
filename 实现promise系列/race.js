Promise.race2 = function (iterable) {
  return new Promise((resolve, reject) => {
    let index = 0;
    for (const promise of iterable) {
      Promise.resolve(promise).then(
        (data) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
      index++;
    }
    if (index === 0) {
      return;
    }
  });
};

let p2 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("joj3o");
    }, 3000);
  });
};
let p4 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("超时了jojo");
    }, 1000);
  });
};

Promise.race2([p2(), p4()])
  .then(function (results) {
    console.log(results);
  })
  .catch(function (reason) {
    console.log(reason);
  });
