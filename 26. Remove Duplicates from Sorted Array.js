/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var currVal = nums[0];
  var currPos = 1;
  for (var i=1; i<nums.length; i++){
    if (nums[i]!=currVal){
      nums[currPos] = nums[i];
      currPos++;
      currVal = nums[i];
    }
  }
  // for (var i=currPos; i<nums.length; i++) nums[i] = "_";
  // console.log(nums);
  return currPos;
};

// console.log(removeDuplicates([1,1,2])); //2, [1,2,_]
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); //5, [0,1,2,3,4,_,_,_,_,_]
