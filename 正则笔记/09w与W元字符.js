// w与W元字符

// \w 表示字母数字下划线 已经囊括了\d

// 实现邮箱匹配
let email = '9813123123@qq.com'
console.log(email.match(/^\w+@\w+\.\w+$/));


