/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  var total = 0;
  for (var i=0; i<nums.length; i++){
    total += nums[i];
  }

  var totalLeft = 0;
  var totalRight = total;

  for (var i=0; i<nums.length; i++){
    totalRight -= nums[i];
    if (totalLeft === totalRight) return i;
    totalLeft += nums[i];
  }

  return -1;
};

console.log(pivotIndex([1,7,3,6,5,6])); // 3
console.log(pivotIndex([1,2,3])); // -1
console.log(pivotIndex([2,1,-1])); // 0
console.log(pivotIndex([-1,-1,-1,-1,-1,0])); //2
console.log(pivotIndex([-1,-1,0,0,-1,-1])); //2
console.log(pivotIndex([-1,-1,-1,-1,-1,-1])); //-1
