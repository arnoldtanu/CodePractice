/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var isValid = true;
    for (var i=0; i<9; i++){
        var rowSet = new Set();
        var columnSet = new Set();
        var squareSet = new Set();
        for (var j=0; j<9; j++){
            //row Check
            if (board[i][j] != "."){
                if (rowSet.has(board[i][j])) return false;
                else rowSet.add(board[i][j]);
            }

            // column Check
            if (board[j][i] != "."){
                if (columnSet.has(board[j][i])) return false;
                else columnSet.add(board[j][i]);
            }

            // square Check
            var x = Math.floor(i/3)*3 + Math.floor(j/3);
            var y = (i%3)*3 + (j%3);
            // console.log("i:"+i, "j:"+j, "x:"+x, "y:"+y);
            if (board[x][y] != "."){
                if (squareSet.has(board[x][y])) return false;
                else squareSet.add(board[x][y]);
            }
        }
    }
    return isValid;
};

console.log(isValidSudoku([
 ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]));