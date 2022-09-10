// 模式修正符

// /i忽略大小写 /g全局匹配 /gi 模式组合
let text = 'jojoJOJOJO'

console.log(text.match(/o/gi))

// 替换
console.log(text.replace(/o/gi,'?'))

