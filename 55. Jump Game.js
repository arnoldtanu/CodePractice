/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums){
    if (nums.length == 1) return true;

    var highestJumpTo = 1;
    for (var i=0; i<nums.length; i++){
        highestJumpTo--;
        if (nums[i]>highestJumpTo) highestJumpTo=nums[i];
        if (highestJumpTo <= 0){
            if (i === nums.length-1) return true;
            else return false;
        }
    }
    return true;
};

console.log(canJump([2,0,0]));