let obj = {
  name: "jojo",
  age: 18,
  sex: "male",
};
//Maximum call stack size exceeded
Object.keys(obj).forEach(function (key) {
  Object.defineProperty(obj, key, {
    get(){
        console.log('触发get')
        return obj[key]
    },
    set(){
        obj[key] = '666'//Maximum call stack size exceeded
        console.log('被修改了')
    }
  });
});
obj.name = 'dio'
console.log(obj.name)

// 原因：访问obj中的属性触发了get方法，返回obj.name,但是访问obj.name也会触发get方法，递归调用导致栈溢出

// 这里可能比较难理解的一点是 返回objkey为什么又调用了一次get
// 这里可以理解为递归,返回objkey实际上就是访问了一遍这个值然后再返回
// 如何避免呢
// 使用形参接收objkey,这样的话,就已经提前访问好了,传入的只是一个地址

