// 有效率的y模式

// 看个例子

let text = 'asdasdasdas的,213123123,33333,asdasd'
const reg = /\d/g

console.log(reg.exec(text))
console.log(reg.exec(text))
console.log(reg.exec(text))
console.log(reg.exec(text))
console.log(reg.exec(text))
console.log(reg.exec(text))
console.log(reg.exec(text))

// 模式g会使得整个需要匹配的字符串都走下去，假设我只需要取出里面的某段连续数字，然后后面又没有连续数字，使用m性能上就不太好

// 所以诞生了个模式y，匹配不到就返回null 后面就不匹配了
const reg2 = /(\d+,?)/y
reg2.lastIndex = 13
while((res=reg2.exec(text))){
    console.log(res)
}

// 其实也有弊端 也就是y模式依赖于lastIndex 得事先知道他在哪里才行

