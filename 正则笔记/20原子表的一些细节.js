// 原子表字符不解析

let text = '(jo-jo).+'
//原子组在外面才是原子组,在原子表里面是括号的意思
console.log(text.match(/[()]/g))
// .+在原子表里面也是单一的含义 就是本身的意思 不需要转义
console.log(text.match(/[.+]/g))
// 直接用- 本身他有两个意思 一个是-自身 一个是区间匹配 正常情况下我们会转义-来保证他是第一层意思
console.log(text.match(/[-]/g))
console.log(text.match(/[\-]/g))
console.log(text.match(/[j\-]/g))
console.log(text.match(/[a-z]/g))






