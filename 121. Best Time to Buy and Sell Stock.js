/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var minimum = prices[0];
  var maximum = 0;
  for (var i=1; i<prices.length; i++){
    if (prices[i] < minimum) minimum = prices[i];
    else maximum = Math.max(maximum, prices[i]-minimum);
  }
  return maximum;
};

console.log(maxProfit([7,1,5,3,6,4])); //5
console.log(maxProfit([7,6,4,3,1])); //0
