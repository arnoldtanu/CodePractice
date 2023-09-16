/**
 * @param {string} digits
 * @return {string[]}
 */

const MAPPING = {
    '2': ['a','b','c'],
    '3': ['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q','r', 's'],
    '8': ['t','u','v'],
    '9': ['w','x','y', 'z']
};

var letterCombinations = function(digits){
    if (digits.length === 0) return[];
    else if (digits.length === 1) return MAPPING[digits];
    else {
        var t = [];
        for (c of digits){
            if (t.length === 0) t=MAPPING[c];
            else {
                var temp = [];
                for (var i=0; i<t.length; i++){
                    for (var j=0; j<MAPPING[c].length; j++){
                        temp.push(t[i]+MAPPING[c][j]);
                    }
                }
                t = [...temp];
            }
            console.log(c, t);
        }
        return t;
    }
};

console.log(letterCombinations("234"));


// const letterCombinations = function(digits) {
//     const ans = [];
//     const n = digits.length;
//     if (n < 1) return ans;
//     const dfs = (i, curr) => {
//         if (curr.length === n) ans.push(curr);
//         else {
//             for (c of MAPPING[digits[i]]) {
//                 dfs(i+1, curr + c);
//             }
//         }
//     }

//     dfs(0, "");
//     return ans;
// };