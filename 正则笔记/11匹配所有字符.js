// 匹配所有字符
let hd = `
    <span>
        jojolin @abc
        @@@cajsocj    
    </span>
`   
// [\s\S]表示所有字符 当然[\d\D]也是
console.log(hd.match(/<span>[\s\S]+<\/span>/))
