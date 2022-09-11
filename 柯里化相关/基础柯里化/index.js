// 将下面的函数柯里化
// 测试
function multiFn(a, b, c) {
  return a * b * c;
}

let multi = curryEs5(multiFn);

console.log(multi(2)(3)(4));
// console.log(multi(2, 3, 4));
// console.log(multi(2)(3, 4));
// console.log(multi(2, 3)(4));

// function curry(fn, arr = []) {
//   //fn.length 可以获取函数形参的个数
//   let len = fn.length;
//   return function (...args) {
//     // 将所有参数纳入新参
//     let newArgs = [...args, ...arr];
//     // 如果等于接收的参数总和 则调用真实的函数
//     if (newArgs.length === len) {
//       return fn(...newArgs);
//     } else {
//       // 否则递归调用curry收集参数
//       return curry(fn, newArgs);
//     }
//   };
// }

function curryEs5(fn, arr) {
  //fn.length 可以获取函数形参的个数
  let len = fn.length;
  arr = arr || [];
  return function () {
    // 将所有参数纳入新参,es5需要借用array原型的slice去解构arguments
    // 相当于 [...arguments]
    let newArgs = arr.concat(Array.prototype.slice.call(arguments));
    // 如果等于接收的参数总和 则调用真实的函数
    if (newArgs.length === len) {
      // 这里的apply是因为newArgs要去解构 其实和fn(...newArgs)是一样的
      return fn.apply(this, newArgs);
    } else {
      // 否则递归调用curry收集参数，call同上
      return curryEs5.call(this, fn, newArgs);
    }
  };
}

