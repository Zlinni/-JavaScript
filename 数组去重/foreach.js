let arr = [2, 4, 5, 2, 4, 7, 9, 1, 9, 500];
let arr2 = [2, undefined, 5, undefined, 4, 7, 9, undefined, 1, 9, 500];
let arr3 = [undefined, null, null, undefined];

function getUniqueArray(arr) {
  let result = [];
  arr.forEach((item) => {
    if (result.indexOf(item) === -1) result.push(item);
  });
  return result;
}
console.log(getUniqueArray(arr));
console.log(getUniqueArray(arr2));
console.log(getUniqueArray(arr3));
