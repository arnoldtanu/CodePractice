/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    // var negative = (x < 0);
    // x = Math.sqrt(Math.pow(x,2));
    // var t = x.toString();
    // var y = "";
    // for (var i=t.length-1; i>=0; i--){
    //     y = y + "" + t.charAt(i);
    // }
    // var y = parseInt(y);
    // if (y > 2147483648) y = 0;
    // if (negative) y = 0 - y;
    // return y;

    var hasil = 0;
    var negative = (x < 0);
    if (negative) x = x * (-1);
    while (x>=10) {
        hasil = hasil * 10 + x % 10;
        x = Math.floor(x / 10);
    };
    hasil = hasil * 10 + x % 10;
    if (hasil > 2147483648) hasil = 0;
    if (negative) hasil = 0 - hasil;
    return hasil;
};

// console.log(reverse(-1));