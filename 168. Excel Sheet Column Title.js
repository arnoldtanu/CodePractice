/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
              // 0         1         2      
              // 01234567890123456789012345      
  const table = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  do {
    columnNumber--;
    result = table[columnNumber % 26] + result + "";
    columnNumber = Math.floor(columnNumber/26);
  } while (columnNumber > 0);
  return result;
};

console.log(convertToTitle(1)); //A
console.log(convertToTitle(28)); //AB
console.log(convertToTitle(701)); //ZY
