// 模式u unicode
// 每个字符都有相应的属性去区分

// 这里虽然不是很懂 但是有几个例子 

let text = 'jojostoneocean2022.,}[com笑死我了哈哈哈'

//检测字符的属性为字母的情况 (中文也加进去了？？)
console.log(text.match(/\p{L}/gu))

//检测标点符号
console.log(text.match(/\p{P}/gu))


//检测中文
console.log(text.match(/\p{sc=Han}/gu))