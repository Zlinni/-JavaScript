let test = "jojolin";
let a = "lin";
let reg = new RegExp(a, "g"); //g代表全局
//是否包含某个字符串
console.log(reg.test(test));


// replace 后面也可以根一个函数自定义替换
test = test.replace(/\w/g,(str)=>{
    return 'dio'
})
console.log(test)