/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  var result = "";
  for (var i=0; i<s.length; i++){
    if (i % (2*k) === 0){
      for (j=k-1; j>=0; j--){
        result = result + s.charAt(i+j);
      }
      i+=k-1;
    } else {
      result = result + s.charAt(i);
    }
  }
  return result;
};

console.log(reverseStr("abcdefg",2)); //"bacdfeg"
console.log(reverseStr("abcd",2)); //"bacd"
