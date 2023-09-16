/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c){
  let result = '';
  let inputArray = [['a',a],['b',b],['c',c]];
  let repeatCurrChar = 0;
  let currChar = "";
  let selectedArrIndex = 0;
  while ((inputArray[0][1] > 0 || inputArray[1][1] > 0 || inputArray[2][1] > 0) && repeatCurrChar<=2){
    inputArray.sort((a,b)=>{return a[1]<b[1] ? 1 : -1});
    if (repeatCurrChar>=2 && inputArray[0][0] === currChar) selectedArrIndex = 1; else selectedArrIndex = 0;
    if (currChar === inputArray[selectedArrIndex][0]){
      repeatCurrChar++
    } else {
      repeatCurrChar = 1;
      currChar = inputArray[selectedArrIndex][0];
    }
    inputArray[selectedArrIndex][1]--;
    if (inputArray[selectedArrIndex][1] < 0) return result;
    result += '' + currChar;
  }
  return result;
};

// console.log(longestDiverseString(1,1,7).length); //8
// console.log(longestDiverseString(0,1,7).length); //5
// console.log(longestDiverseString(7,3,1).length); //11
// console.log(longestDiverseString(3,3,3).length); //9
console.log(longestDiverseString(2,4,1).length); //7
