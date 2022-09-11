// 原子表 新使用

// 给个具体案例如下

let date = '2022-01-22'

// 要求date可以是-连接也可以是/连接 但是前后的符号必须一致

let date2 = '2022/01/22';
let date3 = '2022-01/22';

// 这里注意的是/需要转义
const reg = /^\d{4}[-\/]\d{2}[-\/]\d{2}/
console.log(reg.exec(date))
console.log(reg.exec(date2))
console.log(reg.exec(date3))

//根据结果我们发现date3 这个情况也被匹配了

// 改写reg 使用原子组加原子表
const reg2 = /^\d{4}([-\/])\d{2}\1\d{2}/

console.log(reg2.exec(date))
console.log(reg2.exec(date2))
console.log(reg2.exec(date3))

// 原理是原子组里面的东西是一个整体 后续用\1表示采用之前的结果 所以前后一致才满足


