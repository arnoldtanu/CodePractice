/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
  var set = new Set();
  for (var i=0; i<candyType.length; i++){
    set.add(candyType[i]);
  }

  var canEat = candyType.length / 2;
  if (set.size > canEat) return canEat;
  return set.size;
};

console.log(distributeCandies([1,1,2,2,3,3])); //3
console.log(distributeCandies([1,1,2,3])); //2
console.log(distributeCandies([6,6,6,6])); //1
