// 点元字符的使用
// 因为.只能匹配除了换行符的 也就是遇到换行他就停止了，那么在模板的这个情况下是走不通的
// 使用 /s 视为单行匹配，就可以了
let hd = `
    jojo
    jojolin
`
console.log(hd.match(/.+/)[0])
console.log(hd.match(/.+/s))
