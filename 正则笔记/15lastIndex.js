//lastIndex属性的使用

let text = 'jojo'
//正常这样操作会得到匹配字符的属性
console.log(text.match(/\w/))

//加了g全匹配之后 就丢失了相关属性
console.log(text.match(/\w/g))

// 使用exec
const reg = /\w/g
console.log(reg.lastIndex)
console.log(reg.exec(text))
console.log(reg.lastIndex)
console.log(reg.exec(text))
console.log(reg.lastIndex)
console.log(reg.exec(text))
console.log(reg.lastIndex)
console.log(reg.exec(text))
console.log(reg.lastIndex)

// 这个属性会有一个index 每次执行的时候index就会+1 直到走完
const reg2 = /\w/g

// 所以我们使用循环
while((res = reg2.exec(text))){
    console.log(res)
}
console.log(res) 

// 注意exec只有在全模式g的情况下 才会逐个搜索 
const reg3 = /\w/
console.log(reg3.lastIndex)
console.log(reg3.exec(text))
console.log(reg3.lastIndex)
console.log(reg3.exec(text))
console.log(reg3.lastIndex)
console.log(reg3.exec(text))
console.log(reg3.lastIndex)
console.log(reg3.exec(text))
console.log(reg3.lastIndex)


// 注意reg在最后一个搜索完之后又会开始重新搜索
console.log(reg.lastIndex)
console.log(reg.exec(text))
console.log(reg.lastIndex)
console.log(reg.exec(text))
console.log(reg.lastIndex)
console.log(reg.exec(text))
console.log(reg.lastIndex)
console.log(reg.exec(text))
console.log(reg.lastIndex)

// 总结 exec就是一个可重新执行的迭代器