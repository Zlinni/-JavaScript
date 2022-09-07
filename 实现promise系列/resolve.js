// 实现promise的resolve有三个要点

// 传参为一个Promise则直接返回他 
// 传参为一个thenable对象，返回的promise会跟随这个对象，采用他最终的状态作为自己的状态
// 其他情况，返回以该值为成功状态的promise对象

Promise.myResolve = (params)=>{
    if(params instanceof Promise)return params;
    return new Promise((resolve,reject)=>{
        if(params&&params.then&&typeof params.then === 'function'){
            params.then(resolve,reject)
        }else{
            resolve(params)
        }
    })
}

Promise.myResolve('123').then(res=>console.log(res))
let test = Promise.myResolve('456')
Promise.myResolve(test).then(res=>console.log(res))
Promise.myResolve(test.then(res=>(res+'789'))).then(res=>console.log(res))


