function create(fn, ...args) {
  try {
    if (!fn instanceof Function) {
      throw new Error("err");
    }
    let obj = Object.create(fn.prototype);
    let res = fn.call(obj,...args); //改变了this指向的同时获取到构造的结果
    return res instanceof Object ? res : obj;
  } catch (error) {
    console.log(error);
  }
}
function PersonNormal(name) {
  this.name = name;
}

var pNormal = create(PersonNormal,'jojo');
console.log(pNormal); // PersonNormal { name: 'jojo' }
console.log(pNormal.name); //jojo


function Person() {
  this.name = "Jack";
  return { age: 18 };
}

var p = create(Person);
console.log(p); // {age: 18}
console.log(p.name); // undefined
console.log(p.age); // 18

function Person2() {
  this.name = "Jack";
  return "tom";
}
// var p2 = create(Person2);
var p2 = new Person2()
console.log(p2); // {name: 'Jack'}
console.log(p2.name); // Jack
