/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var currPos = 0;
  for (var i=0; i<nums.length; i++){
    if (nums[i] != val){
      if (i != currPos) nums[currPos] = nums[i];
      currPos++;
    }
  }
  for (var i=currPos; i<nums.length; i++) nums[i] = '_';
  return currPos;
};

// console.log(removeElement([3,2,2,3],3)); //2
// console.log(removeElement([0,1,2,2,3,0,4,2],2)); //5
