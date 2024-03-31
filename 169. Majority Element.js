/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 0;
  let element = null;
  for (let i=0; i<nums.length; i++){
    if (!element || count === 0){
      element = nums[i];
      count = 1
    } else if (nums[i] === element){
      count++;
    } else {
      count--;
    }
  }
  return element;
};

console.log(majorityElement([3,2,3])); //3
console.log(majorityElement([2,2,1,1,1,2,2])); //2
