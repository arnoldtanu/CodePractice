/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  var n = cost.length;
  var prev2 = cost[0];
  var prev1 = cost[1];
  for(let i=2; i<cost.length; i++) {
      let curr = Math.min(prev2, prev1) + cost[i]
      prev2 = prev1
      prev1 = curr
  }
  return Math.min(prev1, prev2)
};

console.log(minCostClimbingStairs([10,15,20])); //15
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])); //6
