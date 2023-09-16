/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let keepAdding = digits.length-1;
    while(keepAdding>=-1){
      if (keepAdding === -1){
        digits.unshift(1);
        keepAdding = -2;
      } else {
        digits[keepAdding] += 1;
        if (digits[keepAdding] >= 10){
          digits[keepAdding] = 0;
          keepAdding--;
        } else keepAdding = -2;
      }
    }
    return digits;
};

// console.log(plusOne([1,2,3])); //[1,2,4]
// console.log(plusOne([4,3,2,1])); //[4,3,2,2]
console.log(plusOne([9])); //[1,0]