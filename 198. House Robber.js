/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums, pos=-2, memo={}){
    if (pos in memo) return memo[pos];
    if (nums.length < 1 || pos>=nums.length) return 0;
    else if (nums.length === 1) return nums[0];
    
    var r2 = rob(nums,pos+2,memo);
    var r3 = rob(nums,pos+3,memo);
    if (r2>r3){
        memo[pos] = (pos>=0?nums[pos]:0)+r2;
        console.log(pos,"+2", memo[pos]);
        return memo[pos];
    } else {
        memo[pos] = (pos>=0?nums[pos]:0)+r3;
        console.log(pos,"+3", memo[pos]);
        return memo[pos];
    }
};

// console.log(rob([1,2,3,1]));
// console.log(rob([2,7,9,3,1]));
// console.log(rob([0,0]));
// console.log(rob([155,44,52,58,250,225,109,118,211,73,137,96,137,89,174,66,134,26,25,205,239,85,146,73,55,6,122,196,128,50,61,230,94,208,46,243,105,81,157,89,205,78,249,203,238,239,217,212,241,242,157,79,133,66,36,165]));