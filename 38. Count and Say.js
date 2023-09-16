/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n){
    var result = "1";
    for (var j=0; j<n-1; j++){
        console.log(j, result);
        var curr = result;
        result = "";
        var currentNumber = "";
        var countNumber = 0;
        for (i=0; i<curr.length; i++){
            var temp = curr.charAt(i);
            if (temp === currentNumber){
                countNumber++;
            } else {
                if (countNumber > 0){
                    result += "" + countNumber.toString() + currentNumber;
                }
                currentNumber = temp;
                countNumber = 1;
            }
        }
        result += "" + countNumber.toString() + currentNumber;
    }
    return result;
};

console.log(countAndSay(4));