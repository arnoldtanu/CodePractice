/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid){
  var checkSurrounding = function(grid,y,x){
    if (x===0 || y===0 || x===grid[y].length-1 || y===grid.length-1) return false;
    if (grid[y-1][x] === 1 || grid[y][x-1] === 1 || grid[y+1][x] === 1 || grid[y][x+1] === 1) return true;
    if (grid[y-1][x] === 5 || grid[y][x-1] === 5 || grid[y+1][x] === 5 || grid[y][x+1] === 5) return true;
    return false;
  }

  var checkIsClosedIsland = function(grid, y, x, isClosedIsland){
    grid[y][x] = 5;
    isClosedIsland = (checkSurrounding(grid,y,x) && isClosedIsland);
    if (y-1>=0 && grid[y-1][x] === 0) isClosedIsland = (checkIsClosedIsland(grid,y-1,x,isClosedIsland) && isClosedIsland);
    if (x-1>=0 && grid[y][x-1] === 0) isClosedIsland = (checkIsClosedIsland(grid,y,x-1,isClosedIsland) && isClosedIsland);
    if (y+1<grid.length && grid[y+1][x] === 0) isClosedIsland = (checkIsClosedIsland(grid,y+1,x,isClosedIsland) && isClosedIsland);
    if (x+1<grid[y].length && grid[y][x+1] === 0) isClosedIsland = (checkIsClosedIsland(grid,y,x+1,isClosedIsland) && isClosedIsland);
    return isClosedIsland;
  };

  var result = 0;
  for (let y=0; y<grid.length; y++){
    for (let x=0; x<grid[y].length; x++){
      if (grid[y][x] === 0){
        if (checkIsClosedIsland(grid,y,x,true)) result++;
        // console.log(grid);
      }
    }
  }
  
  return result;
};

console.log(closedIsland([[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]])); //2
console.log(closedIsland([[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]])); //1
console.log(closedIsland([
[1,1,1,1,1,1,1],
[1,0,0,0,0,0,1],
[1,0,1,1,1,0,1],
[1,0,1,0,1,0,1],
[1,0,1,1,1,0,1],
[1,0,0,0,0,0,1],
[1,1,1,1,1,1,1]])); //2
console.log(closedIsland([
[0,0,1,1,0,1,0,0,1,0],
[1,1,0,1,1,0,1,1,1,0],
[1,0,1,1,1,0,0,1,1,0],
[0,1,1,0,0,0,0,1,0,1],
[0,0,0,0,0,0,1,1,1,0],
[0,1,0,1,0,1,0,1,1,1],
[1,0,1,0,1,1,0,0,0,1],
[1,1,1,1,1,1,0,0,0,0],
[1,1,1,0,0,1,0,1,0,1],
[1,1,1,0,1,1,0,1,1,0]])); //5
