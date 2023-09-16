/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.length < 1) return [-1,-1];
    else if (nums.length === 1){
        if (nums[0] === target) return[0,0];
    }
    
    var start = 0;
    var end = nums.length - 1;
    var found = false;

    while (start < end && !found){
        var middle = Math.floor((start+end)/2);
        if (nums[start] === target || nums[end] === target){
            if (nums[start] !== target) start = end;
            if (nums[end] !== target) end = start;
            found = true;
        }
        else if (nums[middle] === target){
            found = true;
            start = middle;
            end = middle;
        } else if (nums[middle] > target) end = middle-1;
        else start = middle+1;
    }

    if (!found) return[-1, -1];
    else {
        while(nums[start-1] === target || nums[end+1] === target){
            if (nums[start-1] === target) start--;
            if (nums[end+1] === target) end++;
        }
        return [start, end];
    }
};

// console.log(searchRange([5,7,7,8,8,10],8));
console.log(searchRange([1],1));