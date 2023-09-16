/**
 * @param {string} s
 * @return {string[][]}
 */
function isPalindrome(input, memo = {}){
    if (input in memo) return memo[input];
    var result = true;
    // console.log(input);
    if (input.length < 1) result = false;
    var middle = Math.floor(input.length/2)-1;
    for (var i=0; i<=middle; i++){
        // console.log(input[i], "!==", input[input.length-i-1]);
        if (input[i] !== input[input.length-i-1]){
            result = false;
            break;
        }
    }
    memo[input] = result;
    return result;
}

var partition = function(s, loc = 0, memo = {}){
    var palindromeList = [];
    for (var i=1; i<=(s.length-loc); i++){
        var subString = s.substr(loc, i);
        // console.log(subString);
        if (isPalindrome(subString, memo)){
            console.log(subString);
            if (loc + i < s.length){
                var result = partition(s, loc+i, memo);
                for (j=0; j<result.length; j++){
                    result[j] = [subString, ...result[j]];
                }
                palindromeList=[...palindromeList, ...result];
            } else palindromeList.push([subString]);
        }
    }
    // console.log("daftare:", palindromeList);
    return palindromeList;
};

// console.log(partition('aab'));
// console.log(partition('ABCDE'));
// partition('ABCDE');
// console.log(isPalindrome('ab'));