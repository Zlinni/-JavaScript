// 解决方法：封装多一层函数 让其中的一个形参替代接收,不直接访问对象.属性
let obj = {
  name: "jojo",
  age: 18,
  sex: "male",
};
function receiver(obj, key, val) {
  Object.defineProperty(obj, key, {
    get() {
      console.log("触发get");
      return val;
    },
    set(newVal) {
      val = newVal;
      console.log("被修改了");
    },
  });
}
Object.keys(obj).forEach(function (key) {
  receiver(obj, key, obj[key]);
});
obj.name = "dio";
console.log(obj.name);
for (const key in obj) {
  console.log("key", key);
}
