/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums){
    nums.sort(function(a, b){return a - b});
    var hasil = [];
    for (var i=0; i<nums.length-2; i++){
console.log("i:",i);
        if (i!==0 && nums[i-1] === nums[i]) continue;
        var left = i+1;
        var right = nums.length-1;
        while (left<right){
            console.log("left:",left,"right:",right);
            var sum = nums[i]+nums[left]+nums[right];
            if (sum === 0){
                hasil.push([nums[i],nums[left],nums[right]]);
                left++; right--;
                while(left<right && nums[left-1]==nums[left]){
                    left++;
                }
            } else if (sum<0) left++;
            else right--;
        }
        console.log("");
    }
    return hasil;
};

console.log(threeSum([-1,0,1,2,-1,-4]));