/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix){
    var numElement = matrix.length * matrix.length + 1;
    var half = Math.ceil(matrix.length/2);
    for (var i=0; i<matrix.length; i++){
        for (var j=i; j<(matrix.length-i-1); j++){
            var nextElement = ((i * matrix.length + j + 1) * matrix.length) % numElement;
            var currX = i;
            var currY = j;
            var nextX = Math.floor((nextElement-1) / matrix.length);
            var nextY = (nextElement-1) % matrix.length;
            var nextValueHolder = matrix[nextX][nextY];
            matrix[nextX][nextY] = matrix[currX][currY];
            for (var k=0; k<3; k++){
                var currValueHolder = nextValueHolder;
                var currX = nextX;
                var currY = nextY;
                nextElement = (nextElement * matrix.length) % numElement;
                var nextX = Math.floor((nextElement - 1) / matrix.length);
                var nextY = (nextElement - 1) % matrix.length;
                nextValueHolder = matrix[nextX][nextY];
                matrix[nextX][nextY] = currValueHolder;
            }
        }
    }
};

// var matrix = [[1,2,3],[4,5,6],[7,8,9]];
// matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
// rotate(matrix);
// console.log(matrix);