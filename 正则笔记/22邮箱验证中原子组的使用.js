// 邮箱验证中原子组的使用

let test1 = '123131313@qq.com';
let test2 = '123131313@sina.com.cn';
let test3 = 'jojo-123@qq.com';

// 我们可以看到对于第二种情况是不行的 要继续修改
console.log(test1.match(/^[\w-]+@\w+\.(com|cn|org)$/))
console.log(test2.match(/^[\w-]+@\w+\.(com|cn|org)$/))
console.log(test3.match(/^[\w-]+@\w+\.(com|cn|org)$/))

// (\w+\.)+ 表示这样一组的可能有很多个 但是最后都要以com cn org结尾
console.log(test2.match(/^[\w-]+@(\w+\.)+(com|cn|org)$/))

//测试
console.log(test1.match(/^[\w-]+@(\w+\.)+(com|cn|org)$/))
console.log(test2.match(/^[\w-]+@(\w+\.)+(com|cn|org)$/))
console.log(test3.match(/^[\w-]+@(\w+\.)+(com|cn|org)$/))
