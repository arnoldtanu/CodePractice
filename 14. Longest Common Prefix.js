/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0];
    var longest = "";
    while (true){
        var currChar = '';
        var same = false;
        for (var i=0; i<strs.length; i++){
            if (strs[i].length <= longest.length) return longest;
            
            if (currChar === '') currChar = strs[i].charAt(longest.length);
            else {
                if (strs[i].charAt(longest.length) === currChar) same = true;
                else return longest;
            }
        }
        longest = longest + '' + currChar;
    }
};

console.log(longestCommonPrefix(["flower","flow","flight"])); //"fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); //""
