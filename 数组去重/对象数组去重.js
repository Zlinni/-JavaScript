let arr = [2, 4, 5, 2, 4, 7, 9, 1, 9, 500];
let arr2 = [2, undefined, 5, undefined, 4, 7, null,'null','undefined', undefined, 1, 9, 500];
let arr3 = [undefined, null, null, undefined];

let resources = [
    { name: "张三", age: "18" },
    { name: "张三", age: "19" },
    { name: "张三", age: "20" },
    { name: "李四", age: "19" },
    { name: "王五", age: "20" },
    { name: "赵六", age: "21" }
]

function getUniqueArray(arr,target){
    if(!target){
        return arr
    }
    let memo = new Map();
    return arr.reduce((prev,cur)=>{
        if(!memo.has(cur[target])){
            memo.set(cur[target],cur[target]);
            prev.push(cur)
        }
        return prev;
    },[])
}
// console.log(getUniqueArray(arr));
// console.log(getUniqueArray(arr2));
// console.log(getUniqueArray(arr3));
console.log(getUniqueArray(resources,'name'));
console.log(getUniqueArray(resources));


