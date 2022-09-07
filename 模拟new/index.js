// 模拟new 就要知道new做了什么事情：
// * 创建了一个全新的对象
// * 这个对象的隐式原型指向当前构造函数的原型
// * 执行构造函数 要使用call/apply改变this指向
// * 返回值为object类型则作为上述返回值返回 否则返回上述全新对象

function myNew(fn,...args){
    let instance = Object.create(fn.prototype);
    let res = fn.apply(instance,args);
    return typeof res === 'object'?res:instance;
}