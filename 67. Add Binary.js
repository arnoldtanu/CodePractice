/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function(a, b){
//   var number = parseInt(a) + parseInt(b);
//   if (number === 0) return "0";
//   var result = "";
//   while (number > 0){
//     var mod = number % 10;
//     if (mod > 1){
//       number += 10;
//       mod = mod % 2;
//     }
//     result = mod + '' + result;
//     number = Math.floor(number / 10);
//   }
//   return result;
// };
var addBinary = function(a, b){
  if (a === '0' && b === '0') return '0';
  else if (a === '0') return b;
  else if (b === '0') return a;

  var lastA = a.length;
  var lastB = b.length;
  var result = "";
  var carry = 0;
  while (lastA>=0 || lastB>=0){
    lastA--; lastB--;
    if (lastA<0 && lastB<0 && carry == 0) return result;
    var t = 0;
    if (lastA >= 0 && lastB >= 0){
      t = parseInt(a.charAt(lastA)) + parseInt(b.charAt(lastB)) + carry;
    } else if (lastA >= 0) {
      t = parseInt(a.charAt(lastA)) + carry;
    } else  if (lastB >= 0) {
      t = parseInt(b.charAt(lastB)) + carry;
    } else t = carry;
    if (t > 1){
      carry = 1;
      t = t % 2;
    } else carry = 0;
    result = t + '' + result;
  }
  return result;
};

console.log(addBinary("100", "110010")) //"110110"
// console.log(addBinary("0","0")) //"0"
// console.log(addBinary("11","1")) //"100"
// console.log(addBinary("1010","1011")) //"10101"
