//正则表达式中的转义

let price = 23.34

// .有两层含义 优先级最高的：除换行外所有字符 正常：普通的点
// 所以我们需要对.进行转义
console.log(/\d+\.\d+/.test(price))

// 在对象里面就又不一样了,需要多一层转义 建议先看看对应字符串转出来是否和字面量相同
let str = "\\d+\\.\\d+";
console.log(str)
let reg = new RegExp(str)
console.log(reg.test(price)) 


// 匹配是否合法网站
let url = 'https://www.baidu.com';
console.log(/^https?:\/\/\w+\.\w+\.\w+/.test(url))