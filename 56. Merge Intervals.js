/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// yang bener, disort dulu
var merge = function(intervals){
  intervals.sort((a,b)=>a[0]-b[0]);
  let result = [];
  result.push(intervals[0]);
  // console.log(intervals, result);
  // console.log(result);
  for (let i=1; i<intervals.length; i++){
    if (result[result.length-1][1] >= intervals[i][0]){
      if (result[result.length-1][1] < intervals[i][1]) result[result.length-1][1] = intervals[i][1];
    } else
      result.push(intervals[i]);
    // console.log(result);
  }
  return result;
};

var merge2 = function(intervals){
  result = [];
  let changed = false;
  for (var i=0; i<intervals.length; i++){
    if (intervals[i][0]>10000) continue;
    for (var j=0; j<intervals.length; j++){
      if (intervals[j][1] < intervals[j][0] || i === j) continue;
      if ((intervals[i][0]<=intervals[j][1]) && (intervals[j][0]<=intervals[i][1])){
        if (intervals[i][0]>intervals[j][0]) intervals[i][0] = intervals[j][0];
        if (intervals[i][1]<intervals[j][1]) intervals[i][1] = intervals[j][1];
        intervals[j][0]=10001;
        intervals[j][1]=-1;
        changed = true;
      }
    }
    // console.log(intervals);
  }
  if (!changed) return intervals;
  for (var i=0; i<intervals.length; i++){
    if (intervals[i][1] >= intervals[i][0]) result.push(intervals[i]);
  }
  return merge(result);
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]])); //[[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); //[[1,5]]
console.log(merge([[1,4],[0,0]])); //[[0,0],[1,4]]
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]])); //[[1,10]]
console.log(merge([[3,5],[0,0],[4,4],[0,2],[5,6],[4,5],[3,5],[1,3],[4,6],[4,6],[3,4]])); //[[0,6]]