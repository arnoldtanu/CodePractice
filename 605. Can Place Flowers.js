/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  if ((flowerbed.length===1 && flowerbed[0]===0) || n==0) return true;
  for (var i=0; i<flowerbed.length; i++){
    var canPlant = false;
    if (flowerbed[i] === 0){
      if (i==0 && flowerbed[i+1]===0){
        canPlant = true;
      } else if (i==flowerbed.length-1 && flowerbed[i-1]===0){
        canPlant = true;
      } else if (flowerbed[i-1]===0 && flowerbed[i+1]===0){
        canPlant = true;
      }
    }

    if (canPlant){
      flowerbed[i] = 8;
      n--;
      i++;
      if (n==0) return true;
    }
    console.log(flowerbed, n);
  }
  return false;
};

// console.log(canPlaceFlowers([1,0,0,0,1],1)); //true
// console.log(canPlaceFlowers([1,0,0,0,1],2)); //false
// console.log(canPlaceFlowers([0],1)); //true
// console.log(canPlaceFlowers([0,0],1)); //true
// console.log(canPlaceFlowers([0,0],2)); //false
console.log(canPlaceFlowers([0,0,1,0,0],1)); //true
