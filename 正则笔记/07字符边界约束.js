// 字符边界约束
let test = "123";
// ^匹配以x开头的 $匹配以x结束的 \d匹配单个数字
console.log(/^\d$/.test(test))
// 上面有个坑点就是\d只匹配一个数字 需要使用\d+
console.log(/^\d+$/.test(test))


//案例 使得字符串满足3-6位是字母且只有3-6位
const reg  = /^[a-z]{3,6}$/
console.log(''.match(reg))
console.log('a'.match(reg))
console.log('ab'.match(reg))
console.log('abc'.match(reg))
console.log('abcd'.match(reg))
console.log('abcde'.match(reg))
console.log('abcdef'.match(reg))
console.log('abcdefg'.match(reg))

// 所以得出 限定的情况下 就使用开头符和结束符号,顺便这里复习一下原子表 是多选1 

