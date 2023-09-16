/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var min = 0, max = nums.length-1, mid = Math.ceil((max+min)/2);

  if (target <= nums[min]) return min;
  else if (target == nums[max]) return max;
  else if (target > nums[max]) return max+1;

  while (min < mid && mid < max){
    if (target == nums[mid]) return mid;
    if (target < nums[mid]) max = mid;
    else min = mid;
    mid = Math.ceil((max+min)/2);
  }
  return mid;
};

console.log(searchInsert([1,3,5,6],5)); //2
console.log(searchInsert([1,3,5,6],2)); //1
console.log(searchInsert([1,3,5,6],7)); //4
