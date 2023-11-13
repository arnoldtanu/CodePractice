/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  var absentCount = 0;
  var lateCount = 0;

  for (var i=0; i<s.length; i++){
    if (s.charAt(i) === 'L'){
      lateCount++;
      if (lateCount >= 3) return false;
    } else {
      lateCount = 0;
      if (s.charAt(i) === 'A') absentCount++;
      if (absentCount >= 2) return false;
    }
  }

  return true;
};

console.log(checkRecord("PPALLP")); //true
console.log(checkRecord("PPALLL")); //false
