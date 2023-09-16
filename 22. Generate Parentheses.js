/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n, hasil='(',buka=1,tutup=0, returne=[]){
    if (buka === n & tutup === buka) return returne.push(hasil);

    if (buka <= n) generateParenthesis(n, hasil+'(', buka+1, tutup, returne);
    if (buka > tutup) generateParenthesis(n, hasil+')', buka, tutup+1, returne);
// console.log(hasil, returne);
    return returne;
};

// console.log(generateParenthesis(4));
















const generateParenthesis = (n, current = '(', open = 1, close = 0, res = []) => {
    if (close === n) return res.push(current);
    open > close && generateParenthesis(n, current + ')', open, close + 1, res);
    open < n && generateParenthesis(n, current + '(', open + 1, close, res);
    return res
};

console.log(generateParenthesis(4));