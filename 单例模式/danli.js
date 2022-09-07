// 简单写一个单例
// class Source {
//     constructor(name){
//         this.name = name;
//     }
// }
// Source.getInstance = function(name){
//     if(this.instance) return this.instance;
//     return this.instance = new Source(name);
// }
// let s1 = Source.getInstance("资源地1");
// let s2 = Source.getInstance("资源地2");
// console.log(s1 === s2)
// 这里返回的结果是true 说明s1和s2共用一个对象
class Dl {
    constructor(name) {
        this.name = name;
    }
}
Dl.getInstance = function (name) {
    if (this.instance) return this.instance;
    return this.instance = new Dl(name);
}
let s1 = Dl.getInstance('aaa');
let s2 = Dl.getInstance('bbb');
console.log(s1 === s2)

// 新的需求 下面有一个类 里面有一个对象且只有一个功能 现在还有一个单例的方法 将这个对象变成单例的
// class GirlFriend {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// let danli = function (customClass) {
//     let instance = null;
//     return class {
//         constructor() {
//             if (instance) return instance;
//             return instance = new customClass(...arguments);
//         }
//     }
// }
// let DanliGF = danli(GirlFriend);
// let g1 = new DanliGF('2b',20);
// let g2 = new DanliGF('3b',18);
// console.log(g1===g2)



// class Person {
//     constructor(name){
//         this.name = name;
//     }
// }
// let p1 = new Person('zzz');
// let p2 = new Person('yyy');
// console.log(p1===p2);
// 返回false

// Person.getInstance = function(name){
//     if(this.instance) return this.instance;
//     return this.instance = new Person(name);
// }
// let p1 = Person.getInstance('zzz');
// let p2 = Person.getInstance('yyy');
// console.log(p1===p2);
// 返回true

class GF {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let danli = function (customClass) {
    let instance = null;
    return class {
        constructor() {
            if (instance) return instance;
            return instance = new customClass(...arguments);
        }
    }
}
// let g1 = new GF('2b',20);
// let g2 = new GF('3b',18);
// console.log(g1===g2)
// 返回false

let DanliGF = danli(GF);
let g1 = new DanliGF('2b', 20);
let g2 = new DanliGF('3b', 18);
console.log(g1 === g2)
// 返回ture

