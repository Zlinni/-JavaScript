Array.prototype.myFilter = function (callback) {
  let len = this.length;
  let newArr = [],
    i = 0;

  for (; i < len; i++) {
    if (callback.apply(this, [this[i], i, this])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
let test = [1, 2, 4];
console.log(test.filter((item) => item !== 4));
let test2 = [
  { id: 1, name: "jojo" },
  { id: 2, name: "dio" },
];
console.log(test2.filter((item) => item.id !== 1));
