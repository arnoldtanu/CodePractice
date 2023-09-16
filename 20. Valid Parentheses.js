/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = new Map([['(',0],['{',0],['[',0]]);
  const lastChar = [];
  for (var i=0; i<s.length; i++){
    switch (s.charAt(i)){
      case '(':
      case '[':
      case '{':
        map.set(s.charAt(i),map.get(s.charAt(i))+1);
        lastChar.push(s.charAt(i));
        break;
      case ')':
        if (lastChar.pop() != '(') return false;
        var t = map.get('(');
        if (t<=0) return false;
        map.set('(',t-1);
        break;
      case ']':
        if (lastChar.pop() != '[') return false;
        var t = map.get('[');
        if (t<=0) return false;
        map.set('[',t-1);
        break;
      case '}':
        if (lastChar.pop() != '{') return false;
        var t = map.get('{');
        if (t<=0) return false;
        map.set('{',t-1);
        break;
    }
  }
  if (map.get('(')===0 && map.get('{')==0 && map.get('[')==0) return true; else return false;
};

console.log(isValid("[")); //false
// console.log(isValid("()")); //true
// console.log(isValid("()[]{}")); //true
// console.log(isValid("(]")); //false
