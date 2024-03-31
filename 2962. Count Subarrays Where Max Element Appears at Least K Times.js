/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  let maxNum = -Infinity;
  let maxPos = [];
  for (let i=0; i<nums.length; i++){
    let tMaxNum = Math.max(maxNum, nums[i]);
    if (tMaxNum !== maxNum){
      maxPos = [i];
      maxNum = tMaxNum;
    } else if (maxNum === nums[i]){
      maxPos.push(i);
    }
  }

  let result = 0;
  let leftStop = 0;

  if (maxPos.length >= k){
    for (let i=0; i<=maxPos.length-k; i++){
      result += (maxPos[i] - leftStop + 1) * (nums.length - maxPos[i+k-1]);
      leftStop = maxPos[i] + 1;
    }
  }
  return result;
};

console.log(countSubarrays([1,3,2,3,3],2)); // 6
console.log(countSubarrays([1,4,2,1],3)); // 0
