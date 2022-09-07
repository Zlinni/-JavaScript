Function.prototype.myBind = function (ctx, ...args) {
  if (typeof this !== "function") {
    throw TypeError("必须是函数");
  }
  const fn = this;
  const myF = function () {
    // 传null就是新建 所以要判断这个情况
    if (this instanceof myF) {
      return new fn(...args);
    } else {
      return fn.call(ctx, ...args);
    }
  };
  // myF.prototype = fn.prototype;
  return myF;
};

// function f(a, b) {
//     console.log(a + b)
//     console.log(this)
//     console.log(this.name)
// }
// let obj = {
//     name: 1
// }
// f.myBind(obj, 1, 2)() 

function myTest(name) {
  this.name = name;
  this.age = 18
}
myTest.prototype.sayHi = function(){
  console.log('hhsca')
}
let testConstructor = myTest.myBind(null, "jojo");
let test = new testConstructor();
// let test = new myTest('jojo')
console.log(test);

// //用法：f.bind(obj,arg1)()
// function f(a, b) {
//     console.log(a + b)
//     console.log(this)
//     console.log(this.name)
// }
// let obj = {
//     name: 1
// }
// f.myBind(obj, 1, 2)() //否则this指向window
// // f.myBind(obj, 1, 2) //否则this指向window
// function foo(){
//     this.b=100;
//     return this.a;
// }
// var func=foo.myBind({a:1});
// console.log(
//     func()
// )//1
// console.log(
//     new func()
// )
// //{b:100}
