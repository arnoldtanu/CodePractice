/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  const days = 24*60;
  for (let i=0; i<timePoints.length; i++){
    let temp = timePoints[i].split(':');
    timePoints[i] = parseInt(temp[0])*60+parseInt(temp[1]);
  }
  timePoints = timePoints.sort((a,b)=>a-b);

  let result = timePoints[0]+days-timePoints[timePoints.length-1];
  if (result === 0) return 0;
  
  for (let i=0; i<timePoints.length-1; i++){
    let temp = parseInt(timePoints[i+1])-parseInt(timePoints[i]);
    if (temp === 0) return 0;
    if (temp < result) result = temp;
  }

  return result;
};

console.log(findMinDifference(["23:59","00:00"])); //1
console.log(findMinDifference(["00:00","23:59","00:00"])); //0
