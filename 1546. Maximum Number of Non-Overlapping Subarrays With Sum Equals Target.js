/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var maxNonOverlapping2 = function(nums, target) {
    let count = new Set([0]), ans = 0, sum = 0;
    
    for (const i of nums) {
        sum += i;
        console.log(i, sum, sum-target, count);
        // console.log(count, sum, sum-target);
        if (count.has(sum - target)) {
            ans++;
            count = new Set();
            // console.log("cleared", sum - target);
            sum = 0;
        }
        
        count.add(sum);
    }
    return ans;
};

var maxNonOverlapping = function(nums, target) {
    const seen = new Set();
    let total = 0, result = 0;
    
    for(let n of nums) {
        total += n;
        
        if(total === target || seen.has(total - target)) {
            total = 0;
            result++;
            seen.clear()
        } else seen.add(total)
    }
    return result;
};

console.log(maxNonOverlapping([-1,3,5,1,4,2,-9],6));