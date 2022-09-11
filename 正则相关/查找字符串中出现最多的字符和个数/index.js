let str = "abcabcabcbbccccc";
let num = 0;
let char = '';

 // 使其按照一定的次序排列
str = str.split('').sort().join('');
// "aaabbbbbcccccccc"

// 定义正则表达式
let re = /(\w)\1+/g;
// 这里的第二个参数就是原子组所对应的字母
str.replace(re,($0,$1) => {
    if(num < $0.length){
        num = $0.length;
        console.log($0)
        console.log($1)
        char = $1;        
    }
});
console.log(`字符最多的是${char}，出现了${num}次`);