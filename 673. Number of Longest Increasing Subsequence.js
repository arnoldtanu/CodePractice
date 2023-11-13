/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  var result = [1];
  var countResult = [1];
  var max = 1;
  for (var i=1; i<nums.length; i++){
    var currMax = 1;
    var countMax = 1;
    for (var j=i-1; j>=0; j--){
      if (nums[i] > nums[j]){
        if (currMax < result[j]+1){
          currMax = result[j]+1;
          countMax = countResult[j];
        } else if (currMax == result[j]+1){
          countMax+=countResult[j];
        }
      }
    }
    if (currMax > max) max = currMax;
    result[i] = currMax;
    countResult[i] = countMax;
  }

  // console.log(result);
  // console.log(countResult);

  var countTotalResult = 0;
  for (var j=0; j<result.length; j++){
    if (result[j] === max) countTotalResult+=countResult[j];
  }
  return countTotalResult;
};

// console.log(findNumberOfLIS([1,3,5,4,7])); //2
// console.log(findNumberOfLIS([2,2,2,2,2])); //5
// console.log(findNumberOfLIS([1,2,4,3,5,4,7,2])); //3
console.log(findNumberOfLIS([1,1,1,2,2,2,3,3,3])); //27
