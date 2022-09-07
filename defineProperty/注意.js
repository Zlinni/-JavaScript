// 如果是原先没有的属性 默认是不可枚举不可修改不可删除的 
let person = { personName: "jojo" };
Object.defineProperty(person, "fackName", {
//   enumerable: true,
  get() {
    return personName + "??";
  },
  set(val) {
    personName = val;
  },
});

for (const key in person) {
  console.log(key); //不可枚举不输出
}

// 但如果是现有属性 默认是可以枚举,修改,和删除的 
// let person = {personName:'jojo'};
// Object.defineProperty(person, 'personName', {
//   get() {
//     return personName + "??";
//   },
//   set(val) {
//     personName = val;
//   },
// });

// for (const key in person) {
//     console.log(key)//personName
// }
