Promise.myAll = function (iterable) {
  //传入的是可迭代对象
  let index = 0; //这里不一定是数组,不一定有length,所以要变量计算.
  let elementCount = 0; //解决的promise数量
  let anErrorOccurred = false; //判断是否错误
  for (const promise of iterable) {
    const curIndex = index; //封闭index的作用域
    Promise.resolve(promise).then(
      (value) => {
        if (anErrorOccurred) return;
        result[curIndex] = value;
        elementCount++;
        if (elementCount === result.length) {
          this.resolve(result); //如果全部任务都成功,返回数组
        }
      },
      (err) => {
        if (anErrorOccurred) return;
        anErrorOccurred = true;
        this.reject(err);
      }
    );
    index++;
  }
  if (index === 0) {
    this.resolve([]); //长度是0 返回空数组
    return;
  }
  const result = new Array(index); //要在最后写result 因为index是在循环后才计算出来.
};

let p1 = function(){
  setTimeout(() => {
    console.log("cascasc");
  }, 2000);
};
let p2 = function() {
  setTimeout(() => {
    console.log("jojo");
  }, 1000);
};

Promise.myAll([p1(), p2()]);
