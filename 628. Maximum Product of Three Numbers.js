/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  if (nums.length === 3) return nums[0]*nums[1]*nums[2];

  var min1 = Infinity;
  var min2 = Infinity;
  var max1 = -Infinity;
  var max2 = -Infinity;
  var max3 = -Infinity;

  for (var i=0; i<nums.length; i++){
    if (nums[i]<min1){
      min2 = min1;
      min1 = nums[i];
    } else if (nums[i]<min2){
      min2 = nums[i];
    }
    if (nums[i]>max1){
      max3=max2;
      max2=max1;
      max1=nums[i];
    } else if (nums[i]>max2){
      max3=max2;
      max2=nums[i];
    } else if (nums[i]>max3){
      max3=nums[i];
    }
  }
  
  return Math.max(
    min1*min2*max1,
    max3*max2*max1
  );
};

console.log(maximumProduct([1,2,3])); //6
console.log(maximumProduct([1,2,3,4])); //24
console.log(maximumProduct([-1,-2,-3])); //-6
console.log(maximumProduct([-100,-98,-1,2,3,4])); //39200
console.log(maximumProduct([-3,-2,-1,0,0,0,0])); //0
console.log(maximumProduct([-1,-2,-3,-4])); //-6
