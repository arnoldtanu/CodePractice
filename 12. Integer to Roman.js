/**
 * @param {number} num
 * @return {string}
 */
var satuan = function(num, satu){
  var result = "";
  for (var i=0; i<num; i++) result += satu;
  return result;
}

var intToRoman = function(num) {
  var result = "";
  var table = [
    [1000,'M','?'],
    [100,'C','D'],
    [10,'X','L'],
    [1,'I','V'],
  ];
  for (var i=0; i<table.length; i++){
    if (num / table[i][0] >= 1){
      var t = Math.floor(num / table[i][0]);
      if (t === 9) result+=table[i][1]+table[i-1][1];
      else if (t >= 5){
        result+=table[i][2]+satuan(t-5, table[i][1]);
      } else if (t === 4) result+=table[i][1]+table[i][2];
      else result+=satuan(t, table[i][1]);
    }
    num = num % table[i][0];
  }
  return result;
};

// console.log(intToRoman(3)); // III
// console.log(intToRoman(58)); // LVIII
// console.log(intToRoman(1994)); // MCMXCIV
