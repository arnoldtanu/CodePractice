/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === 0) return 0;
    else if (divisor === 1) return dividend;

    var positive = true;
    if (dividend < 0){
        positive = false;
        dividend = dividend * -1;
    }
    if (divisor < 0){
        if (!positive) positive = true; else positive = false;
        divisor = divisor * -1;
    }

    var daftarPerkalian = [[divisor,1]], result = 0, pointerPengurang = 0, increasePointer=true;
    while (dividend >= divisor){
        var temp1 = dividend - daftarPerkalian[pointerPengurang][0];
        // console.log(dividend, temp1, result, daftarPerkalian);
        if (temp1 >= 0){
            dividend = temp1;
            result += daftarPerkalian[pointerPengurang][1];
            if (increasePointer){
                var temp2 = daftarPerkalian[pointerPengurang][0]+daftarPerkalian[pointerPengurang][0];
                var temp3 = daftarPerkalian[pointerPengurang][1]+daftarPerkalian[pointerPengurang][1];
                daftarPerkalian.push([temp2,temp3]);
                pointerPengurang++;    
            } else {
                pointerPengurang--;
                if (pointerPengurang < 0) pointerPengurang=0;
            }
        } else {
            increasePointer = false;
            pointerPengurang--;
            if (pointerPengurang < 0) pointerPengurang=0;
        }
        // console.log(dividend, temp1, result, daftarPerkalian);
        // console.log("");
    }

    if (!positive){
        if (result > 2147483648) result = 2147483648;
        result = result * -1;
    } else {
        if (result >= 2147483648) result = 2147483647;
    }

    return result;
};

console.log(divide(71,-3));