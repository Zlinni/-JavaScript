// 删除dom元素

// 案例
let dom = `
    <h1>
        jojo
    </h1>
`
let dom2 = `
    <H3>
    </H3>
`

const reg = /<(h[1-6])>[\s\S]*<\/\1>/gi
console.log(dom.replace(reg,''))
console.log(dom2.replace(reg,''))
