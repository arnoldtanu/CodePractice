/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0;
    else if (x===4) return 2;
    var i = 2;
    while (i*i <= x){
        i++;
    }
    return i-1;
};