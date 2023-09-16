/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows===1) return s;
    var result = "";
    var maxCount = numRows * 2 - 2;
    var currCount = maxCount;
    for (var i=0; i<numRows; i++){
      var tempCount = currCount;
      var charPos = i;
      while (charPos<s.length){
        result += s.charAt(charPos);
        charPos += tempCount;
        tempCount = maxCount - tempCount;
        if (tempCount <= 0) tempCount = currCount;
      }
      currCount -= 2;
      if (currCount == 0) currCount = maxCount;
    }
    return result;
};

// console.log(convert("PAYPALISHIRING",3)); //PAHNAPLSIIGYIR
// console.log(convert("PAYPALISHIRING",4)); //PINALSIGYAHRPI
// console.log(convert("A",1)); //1
