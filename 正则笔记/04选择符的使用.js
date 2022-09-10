let test = "jojolin";
// | 表示或
console.log(/j|k/.test(test))

let tel = '010-9999999'
let tel2 = '010'

console.log(/(010|020)\-\d{7,8}/.test(tel))
console.log(/(010|020)\-\d{7,8}/.test(tel2))
