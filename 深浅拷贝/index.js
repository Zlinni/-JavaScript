const oldObj = {
    name:'jotaro',
    age:20,
    color:['orange','green','blue'],
    friend:{
        name:'jostar'
    }
}
// 浅拷贝不是复制整个新对象的地址，而是复制新对象属性的地址。

// 深拷贝的话 在复制对象属性的基础上 不能对原先对象的属性进行改变
// function deepClone(obj){
//     // 如果传进来的参数不是对象 或者是 空 直接返回原先参数
//     if(typeof obj !== 'object'||obj===null){
//         return obj;
//     }
//     // 定义一个result 用于复制参数
//     let result;
//     // 那么只剩数组和对象两种可能 继续判断 并改变result的类型
//     if(obj instanceof Array){
//         result = [];
//     }else{
//         result = {};
//     }
//     // 之后就是把obj里面的key拿出来放到result里面 这样就完成了初步的深拷贝
//     // for(let key in obj){
//     //     result[key] = obj[key];
//     // }
//     // 会发现有一点缺陷就是 如果对象里面包含了对象 那么最后做出的修改 还是浅拷贝类型的修改
//     // 解决方法是 递归obj[key] 让他继续判断再传递
//     // 还有一个可以优化的地方 就是对象原型上面的属性不应该去拷贝 所以使用到一个方法
//     // 只会拷贝对象自身的属性
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             result[key] = deepClone(obj[key]);
//         }
//     }

//     return result;
// }
function deepClone(obj){
    if(typeof obj !== 'object'||obj===null){
        return obj;
    }
    let result;
    if(obj instanceof Array){
        result = [];
    }else{
        result = {};
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key]);
        }
    }
    return result;
}



const newObj = deepClone(oldObj);
newObj.age = 99;
newObj.color[0] = 'yellow';
console.log('oldObj',oldObj);
console.log('newObj',newObj);

var test1 = {x:1};
let obj = Object.create(test1);
let obj1 = test1;
let obj2 = new Object(test1)
console.log(obj);
console.log(obj1);
console.log(obj2);

console.log(obj2 === obj1)
// console.log(obj1 instanceof Object)
