// 取出数字
// case: jojo123jojo321
// 正常写法：
let test = "jojo123jojo321";
let num = [...test].filter(n=>!Number.isNaN(parseInt(n)));
console.log(num.join(''))

// 正则写法
console.log(test.match(/\d/g).join(''))