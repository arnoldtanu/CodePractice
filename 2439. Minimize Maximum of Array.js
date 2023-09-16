/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
  var tempSum = nums[0];
  var max = nums[0];
  for (var i=1; i<nums.length; i++){
    tempSum += nums[i];
    if (nums[i]>=max){
      var temp = Math.ceil(tempSum / (i+1));
      if (max < temp) max = temp;
    }
  }
  return max;
};

// console.log(minimizeArrayValue([3,7,1,6])); //5
// console.log(minimizeArrayValue([10,1])); //10
// console.log(minimizeArrayValue([13,13,20,0,8,9,9])); //16
console.log(minimizeArrayValue([4,7,2,2,9,19,16,0,3,15])); //9