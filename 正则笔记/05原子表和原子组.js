//原子表和原子组
let reg = /[123456]/
let hd = '123123'
// 原子表 [] 表示任选里面的其中一个/多选一 注意只能选一
console.log(hd.match(reg))

// 原子组 () 整体正则
let reg2 = /(12|34)/;//表示12是一个整体或者34是一个整体
console.log(hd.match(reg2))



