/**
 * @param {character[][]} grid
 * @return {number}
 */

let checkSurounding = function(maps, posy, posx){
  maps[posy][posx] = 'x';
  if (posx-1 >= 0 && maps[posy][posx-1] === '1') checkSurounding(maps,posy,posx-1);
  if (posy-1 >= 0 && maps[posy-1][posx] === '1') checkSurounding(maps,posy-1,posx);
  if (posx+1 < maps[posy].length && maps[posy][posx+1] === '1') checkSurounding(maps,posy,posx+1);
  if (posy+1 < maps.length && maps[posy+1][posx] === '1') checkSurounding(maps,posy+1,posx);
}

var numIslands = function(grid) {
  let numIsland = 0;
  for (let y=0; y<grid.length; y++)
    for (let x=0; x<grid[y].length; x++){
      if (grid[y][x] !== '0' && grid[y][x] !== 'x'){
        numIsland++;
        checkSurounding(grid,y,x);
      }
      // console.log(numIsland, grid);
    }
  return numIsland;
};

console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
])); //1
console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
])); //3
console.log(numIslands([["1","1","1"],["0","1","0"],["1","1","1"]])); //1
console.log(numIslands([
  ["1","1","1","1","1","0","1","1","1","1"],
  ["1","0","1","0","1","1","1","1","1","1"],
  ["0","1","1","1","0","1","1","1","1","1"],
  ["1","1","0","1","1","0","0","0","0","1"],
  ["1","0","1","0","1","0","0","1","0","1"],
  ["1","0","0","1","1","1","0","1","0","0"],
  ["0","0","1","0","0","1","1","1","1","0"],
  ["1","0","1","1","1","0","0","1","1","1"],
  ["1","1","1","1","1","1","1","1","0","1"],
  ["1","0","1","1","1","1","1","1","1","0"]
])); //2