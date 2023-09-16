/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
  var currChar = 0;
  var charList = new Set();
  var result = 0;
  while (currChar < s.length){
    if (charList.has(s.charAt(currChar))){
      result++;
      charList.clear();
    }
    charList.add(s.charAt(currChar));
    currChar++;
  }
  return result+1;
};

console.log(partitionString('abacaba')); //4
console.log(partitionString('ssssss')); //6
