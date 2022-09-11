function parseToMoney(num) {
  num = parseFloat(num.toFixed(3));
  let [integer, decimal] = String.prototype.split.call(num, ".");
  integer = integer.replace(/\d(?=(\d{3})+$)/g, "$&,");
  return integer + "." + (decimal ? decimal : "");
}



console.log(parseToMoney(1234.56));
console.log(parseToMoney(123456789));
console.log(parseToMoney(1087654.321));

