const str = 'sfhjasfjgfasjuwqrqadqeiqsajsdaiwqdaklldflas-cmxzmnha';

const res = str.split('').reduce((pre,next)=>{
 pre[next] ? pre[next]++ : pre[next] = 1
 return pre 
},{})

console.log(res)