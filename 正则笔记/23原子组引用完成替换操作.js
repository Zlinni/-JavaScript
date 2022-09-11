// 原子组引用完成替换操作
let text = `
    <h1>jojo</h1>
    <span>jojolin</span>
    <h3>jojostoneocean</h3>
`;

let reg = /<(h[1-6])>([\s\S]+)<\/\1>/g;
console.log(text.match(reg));

// 这里取出第二个括号内的内容出来 并替换整个字符串
// 确定index的技巧是数括号 第一个对于1 以此类推
console.log(text.replace(reg, "<p>$2</p>"));

text.replace(reg,(p0,p1,p2,p3,p4)=>{
    console.log(p0)
    console.log(p1)
    console.log(p2)
})