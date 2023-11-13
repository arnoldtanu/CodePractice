/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  var posx = 0;
  var posy = 0;
  for (var i=0; i<moves.length; i++){
    switch (moves.charAt(i)){
      case "U":
        posy--;
        break;
      case "D":
        posy++;
        break;
      case "L":
        posx--;
        break;
      case "R":
        posx++;
        break;
    }
  }
  return (posx===0 && posy===0)
};

console.log(judgeCircle("UD")); //true
console.log(judgeCircle("LL")); //false
