/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    var negative = null, angka = null;
    for (var i=0; i<s.length; i++){
        var c = s.charCodeAt(i);
        console.log(c, angka);
        if (angka === null){
            if (c === 43){ negative=false; angka=0;}
            else if (c === 45){ negative=true; angka=0;}
            else if (c >= 48 && c<=57) angka = c - 48;
            else if (c !== 32) return 0;
        } else {
            if (c >= 48 && c<=57) angka = angka * 10 + c - 48;
            else i=s.length;
        }
    }
    if (angka >= 2147483648)
        if (negative) angka = 2147483648; else angka = 2147483647;
    if (negative === true) angka = angka * -1;
    return angka;
};

console.log(myAtoi("2147483648"));