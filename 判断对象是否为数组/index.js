function judgeArr(arr){
    if(typeof arr === 'object'){
        return Object.prototype.toString.call(arr) === '[object Array]';
    }
    return false;
}
console.log(judgeArr([1,2]));