let template = "我是{{name}}，年龄{{age}}，性别{{sex}}";
let data = {
  name: "姓名",
  age: 18,
};
// 我是姓名，年龄18，性别undefined
console.log(render(template, data));
// 思路:正则匹配模板中的内容,递归解析
// 正则:/{\{\(\w+)\}\}/
function render(template, data) {
  const reg = /\{\{(\w+)\}\}/;
  if (reg.test(template)) {
    const element = reg.exec(template)[1];
    template = template.replace(reg, data[element]);
    return render(template, data);
  }
  return template;
}
