/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = nums => {
    let sequence = [nums[0]];
    nums.forEach((num, idx)=>{
        if (num > sequence[sequence.length - 1]) sequence.push(num);
        else sequence[sequence.findIndex(val => val >= num)] = num;
    })
    return sequence.length;
}

var lengthOfLIS2 = function(nums){
    var sorted = [];
    for (var i=0; i<nums.length; i++){
        sorted.push([nums[i],i]);
    }
    sorted.sort((a,b)=>a[0]-b[0]);

    var currValue = null;
    var result = [[sorted[i][1],1]];
    for (var i=1; i<sorted.length; i++){
        if (currValue !== sorted[i][0]){// if current value not same with before
            for (j=0; j<result.length; j++){
                if (result[i][0] < sorted[i][1]) result[i][1]++;
            }
            result.push()
            currValue = sorted[i][0];
        }
    }
    return maxStreak;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));