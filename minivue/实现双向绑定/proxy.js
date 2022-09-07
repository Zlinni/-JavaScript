// 双向绑定其实就是vue中的一个变量被劫持,当数据变化的时候,修改视图,当视图更改,数据变化

const data = {
    text:'default'
}
const input = document.getElementById('input');
const span = document.getElementById('span');
// 数据劫持
const proxy  = new Proxy(data,{
    // 数据变化引起视图更改
    set(target,key,value,receiver){
        target[key] = value;
        input.value = value;
        span.innerHTML = value;
        // let res = Reflect(target,key,value,receiver)
        return value;
    }
})
// 视图变化引起数据更改
input.addEventListener('keyup',function(e){
    proxy.text = e.target.value;
})