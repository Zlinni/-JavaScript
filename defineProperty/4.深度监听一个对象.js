// 解决方法：封装多一层函数 让其中的一个形参替代接收,不直接访问对象.属性
let obj = {
  name: "jojo",
  age: 18,
  sex: "male",
  jojoObj: {
    name: "jostar",
    age: 22,
  },
};
function receiver(obj, key, val) {
  // obj就递归
  if (typeof val === "object") {
    observer(val);
  }
  Object.defineProperty(obj, key, {
    get() {
      console.log("触发get");
      return val;
    },
    set(newVal) {
      //假如把其他类型修改成object类型 重新监听
      if (typeof newVal === "object") {
        observer(key);
      }
      console.log("被修改了");
      val = newVal;
    },
  });
}
function observer(obj) {
  //递归终点
  if (typeof obj !== "object" || obj === null) {
    return;
  }
  Object.keys(obj).forEach(function (key) {
    receiver(obj, key, obj[key]);
  });
}
observer(obj)
obj.name = {
    test:'toObj'
}
// obj.name = 'dio'
console.log(obj.name);
obj.name.test = 'jojo'
