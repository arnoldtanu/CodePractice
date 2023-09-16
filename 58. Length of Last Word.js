/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var lastchar = -1;
  for (var i = s.length-1; i>=0; i--){
    if (lastchar > -1 && s[i] === ' ') return lastchar-i
    else if (lastchar === -1 && s[i]!=' ') lastchar = i;
  }
  if (lastchar === -1) return 0;
  else return lastchar+1;
};

console.log(lengthOfLastWord("W")); //1
console.log(lengthOfLastWord("World  ")); //5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); //4
console.log(lengthOfLastWord("luffy is still joyboy")); //6
