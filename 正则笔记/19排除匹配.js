// 排除匹配

let text = '张三:010-9999999;李四:020-9999999'
console.log(text.match(/[^\d\-:;]+/g))