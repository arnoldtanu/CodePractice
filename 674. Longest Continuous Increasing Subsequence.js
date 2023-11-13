/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  var max = 1;
  var currcount = 1;
  for (var i=1; i<nums.length; i++){
    if (nums[i-1]<nums[i]){
      currcount++;
      if (currcount > max) max = currcount;
    } else {
      currcount = 1;
    }
  }
  return max;
};

console.log(findLengthOfLCIS([1,3,5,4,7])); //3
console.log(findLengthOfLCIS([2,2,2,2,2])); //1
console.log(findLengthOfLCIS([1,3,5,4,2,3,4,5])); //4
