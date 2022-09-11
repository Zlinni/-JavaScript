// console.log(add(1).toString());
// console.log(add(1)(2).toString());
// console.log(add(1)(2)(3).toString());
console.log(myAdd(1)(2, 3).toString());
// console.log(add(1, 2)(3).toString());
// console.log(add(1, 2, 3).toString());

function myAdd(...args) {
  //收集第一个参数
  console.log(args);
  let fn = function (...newArgs) {
    // 收集后续参数
    console.log(newArgs);
    // 参数拼接
    args = args.concat(newArgs);
    console.log(args);
    return myAdd.apply(null, args);
  };
  // 重写toString方法 使其转化原始值的时候调用
  fn.toString = function () {
    return args.reduce((prev, cur) => prev + cur);
  };
  return fn;
}

function add(x) {
  // 存储和
  let sum = x;

  // 函数调用会相加，然后每次都会返回这个函数本身
  let tmp = function (y) {
    sum = sum + y;
    return tmp;
  };

  // 对象的toString必须是一个方法 在方法中返回了这个和
  tmp.toString = () => sum;
  return tmp;
}
console.log(add(1)(2)(3).toString())