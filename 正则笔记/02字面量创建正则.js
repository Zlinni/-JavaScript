//字面量创建正则
let test = "jojo123jojo321";
console.log(/o/.test(test))

//字面量中放变量
let useO = 'o';
console.log(eval(`/${useO}/`).test(test))