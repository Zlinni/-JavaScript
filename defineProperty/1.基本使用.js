//基本实现 和 一些操作
let personName = "jojo";
let person = {};
//默认给出的值是不可枚举的
Object.defineProperty(person, "fackName", {
  get() {
    return personName + "??";
  },
  set(val) {
    personName = val;
  },
});

console.log(person.fackName); //jojo??

person.fackName = "dio";

console.log(person.fackName); //dio??

for (const key in person) {
  console.log(key); //默认不可枚举 所以forin遍历不出
}

console.log(Reflect.ownKeys(person));


Object.defineProperty(person, "enumerableName", {
  enumerable:true,
  get() {
    return personName + "??";
  },
  set(val) {
    personName = val;
  },
});

console.log(person.enumerableName);
for (const key in person) {
  console.log(key); //enumerableName
}

