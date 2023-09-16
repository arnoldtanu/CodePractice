/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s){
    var max = 0, kata = "";
    for (var i=0; i<s.length; i++){
        var index = kata.indexOf(s[i]);
        if (index > -1){
            kata = kata.substring(index+1) + "" + s[i];
        } else {
            kata = kata + "" + s[i];
        }
        if (max < kata.length) max = kata.length;
    }
    return max;
};

console.log(lengthOfLongestSubstring("dvdf"));