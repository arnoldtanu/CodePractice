/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0) return false;
    else if (x<10) return true;

    var stored = [];
    while (x > 0){
      stored.push(x % 10);
      x = Math.floor(x / 10);
    }

    for (i=0; i<Math.floor(stored.length / 2); i++){
      if (stored[i] != stored[stored.length - 1 - i]) return false;
    }
    return true;
};

console.log(isPalindrome(121)); //true
console.log(isPalindrome(-121)); //false
console.log(isPalindrome(10)); //false