Function.prototype.myApply = function(ctx=window,args){
    try {
        if(args&&!Array.isArray(args)){
            throw TypeError('err')
        }
        const fn = Symbol('fn');
        ctx[fn] = this;
        const res = ctx[fn](...args);
        delete ctx[fn];
        return res;
    } catch (error) {
        console.log(error)        
    }
}
//用法：f.apply(obj,[arg1])
function f(a, b) {
    console.log(a + b)
    console.log(this.name)
}
let obj = {
    name: 1
}
f.myApply(obj, [1, 2]) //否则this指向window
f.myApply(obj, 1,2) //否则this指向window



























// try {
//     if(args&&!Array.isArray(args)){
//         throw Error('必须是数组');
//     }
//     const fn = Symbol('fn');
//     ctx[fn] = this;
//     const res = ctx[fn](...args);
//     delete ctx[fn];
//     return res;
// } catch (error) {
//     console.log(error)
// }