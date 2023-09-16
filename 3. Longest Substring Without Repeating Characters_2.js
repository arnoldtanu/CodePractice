/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s){
    if (s.length <= 1) return s.length;

    var max = 0, left = 0, history = new Map();
    for (var i=0; i<s.length; i++){
        if (history.has(s.charAt(i))){
            if (history.get(s.charAt(i)) >= left){
                if (max < i-left) max = i-left;
                left = history.get(s.charAt(i))+1;                    
            }
        }
        history.set(s.charAt(i),i);
    }
    if (max < i-left) max = i-left;
    return max;
};

// console.log(lengthOfLongestSubstring("abcabcbb")); //3
// console.log(lengthOfLongestSubstring("bbbbb")); //1
// console.log(lengthOfLongestSubstring("pwwkew")); //3
console.log(lengthOfLongestSubstring("dvdf")); //3
// console.log(lengthOfLongestSubstring(" ")); //1