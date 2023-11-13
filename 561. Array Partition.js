/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort((a,b)=>a-b);
  var total = 0;
  for (var i=0; i<nums.length; i=i+2){
    total += nums[i];
  }
  return total;
};

console.log(arrayPairSum([1,4,3,2])); //4
console.log(arrayPairSum([6,2,6,5,1,2])); //9
