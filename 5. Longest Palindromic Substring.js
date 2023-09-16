/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) return s;

    var max = s[0], arr = [];
    for (var i=1; i<s.length; i++){
        if (s[i] == s[i-1]){
            arr.push(i-1);
        }
        if (i>=2 && s[i] == s[i-2]){
            arr.push(i-2);
        }

        for (var j=0; j<arr.length; j++){
            if (arr[j]>=0){ // kalo arr[j] masih bisa diitung
                if (s[i] === s[arr[j]]){ // kalo char ke-i sama ama char ke-arr[j]-1
                    if (max.length < (i-arr[j])+1){
                        max = s.substring(arr[j],i+1);
                        // console.log(":sama:", i+1, arr[j], max);
                    }
                    arr[j]--;
                } else arr[j] = -1;
            }
        }

        // console.log(i, arr, max);
        // console.log("");
    }
    return max;
};

// console.log(longestPalindrome("010101011"));
// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("aacabdkacaa"));
//                             01234567890