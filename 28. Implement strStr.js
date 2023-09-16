/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  var found = 0;
  for (var i=0; i<haystack.length; i++){
    if (haystack.charAt(i) === needle.charAt(found)){
      found++;
      if (found === needle.length) return i-found+1;
    } else {
      i = i - found;
      found = 0;
    }
    // console.log(found,haystack.charAt(i));
  }
  return -1;
};

// console.log(strStr("hello","ll")); //2
// console.log(strStr("aaaaa","bba")); //-1
