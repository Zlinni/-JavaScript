Promise.allSettled = function (iterable) {
  return new Promise((resolve, reject) => {
    let index = 0;
    for (const promise of iterable) {
      const curIndex = index;
      Promise.resolve(promise).then(
        (data) => {
          result[curIndex] = {
            status: "fulfilled",
            value: data,
          };
          if (curIndex === result.length-1) {
            resolve(result);
          }
        },
        (err) => {
          result[curIndex] = {
            status: "rejected",
            value: err,
          };
          if (curIndex === result.length-1) {
            resolve(result);
          }
        }
      );
      index++;
    }
    if (index === 0) {
      resolve([]); //长度是0 返回空数组
      return;
    }
    const result = new Array(index);
  });
};

let p1 = function () {
  setTimeout(() => {
    console.log("cascasc");
  }, 2000);
};
let p2 = function () {
  setTimeout(() => {
    console.log("jojo");
  }, 1000);
};
let p3 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("jojo");
    }, 1000);
  });
};
let p4 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("jojo");
    }, 1000);
  });
};

Promise.allSettled([p1(), p2(),p3(), p4()]).then((data) => {
  console.log(data);
});
