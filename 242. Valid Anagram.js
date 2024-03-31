/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  let mapS = new Map();
  let mapT = new Map();

  for (let i=0; i<s.length; i++){
    if (mapS.get(s[i])){
      mapS.set(s[i],mapS.get(s[i])+1);
    } else {
      mapS.set(s[i],1);
    }
    if (mapT.get(t[i])){
      mapT.set(t[i],mapT.get(t[i])+1);
    } else {
      mapT.set(t[i],1);
    }
  }

  if (mapS.size !== mapT.size) return false;

  for (let [key, value] of mapS) {
    if (mapT.get(key) !== value) return false;
  };

  return true;
};

console.log(isAnagram("anagram","nagaram")); //true
console.log(isAnagram("rat","car")); //false
