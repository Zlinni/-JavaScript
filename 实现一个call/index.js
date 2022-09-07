// Function.prototype.myCall = function(ctx = window,...args){
//     const fn = Symbol('fn');
//     ctx[fn] = this;
//     const res = ctx[fn](...args);
//     delete ctx[fn];
//     return res;
// }
// es5
Function.prototype.myCall2 = function(ctx){
    ctx = ctx || window;
    const fn = Symbol('fn');
    ctx[fn] = this;
    const args = [...arguments].slice(1)
    const res = ctx[fn](...args);
    delete ctx[fn];
    return res;
}
//用法：f.call(obj,arg1)
function f(a, b) {
    console.log(a + b)
    console.log(this.name)
}
let obj = {
    name: 1
}
f.myCall2(obj, 1, 2) //否则this指向window


