/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function(nums) {
    let max = 0,
        jumps = 0,
        target = 0,
        n = nums.length - 1;

    console.log(nums);

    for (let i = 0; i < n; i++) {
        console.log("i:"+i, "jumps:"+jumps, "max:"+max, "target:"+target, "n:"+n);
        max = Math.max(max, i + nums[i]);

        if (i === target) {
            target = max;
            jumps++;
        }
        console.log("i:"+i, "jumps:"+jumps, "max:"+max, "target:"+target, "n:"+n);
        console.log("");
    }

    return jumps;
};

var jump4 = function(nums){
    var jumpCount = new Map();
    jumpCount.set(0,0);
    for (var i=0; i<nums.length; i++){
        var totJump = jumpCount.get(i)+1;
        for (var j=1; j<=nums[i]; j++){
            if (!jumpCount.has(i+j) || jumpCount.get(i+j) > totJump) jumpCount.set(i+j,totJump);
        }
    }
    return jumpCount.get(nums.length-1);
}

var jump3 = function(nums){
    var jumpCount = Array(nums.length).fill().map(()=>nums.length);
    jumpCount[0] = 0;
    for (var i=0; i<nums.length; i++){
        var totJump = jumpCount[i]+1;
        for (var j=1; j<=nums[i]; j++){
            if (jumpCount[i+j] > totJump) jumpCount[i+j] = totJump;
        }
        // console.log(jumpCount);
    }
    return jumpCount[nums.length-1];
}

var jump2 = function(nums, pos=0, memo={}){
    if (pos in memo) return memo[pos];
    if (pos >= nums.length-1) return 0;
    if (nums[pos] === 0) return -1;

    var howManyJump = nums.length;
    for (var i=1; i<=nums[pos]; i++){
        var tryJump = jump(nums,pos+i,memo);
        if (tryJump >= 0){ //not reach 0 jump
            if (tryJump < howManyJump) howManyJump = tryJump;
            if (pos === 0) console.log(i, tryJump);    
        }
    }
    howManyJump++;
    memo[pos] = howManyJump;
    return howManyJump;
};

// console.log(jump([2,3,0,1,4]));
console.log(jump([3,3,3,0,3,1,1,1,1]));