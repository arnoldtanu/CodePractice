/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s){
    var listBeforeBefore = 0,
        listBefore = 0,
        listNow = 0,
        single = "",
        double = "";

    for (var i=0; i<s.length; i++){
        double = ""+single+s.charAt(i);
        single = s.charAt(i);

        listNow = listBefore;
        if (parseInt(single) > 0 && !(s.charAt(i+1) === "0") && !(i == 1 && s.charAt(i-1) === "0")){
            if (i === 0 && listNow === 0) listNow++;
        } else listNow = 0;

        if (parseInt(double) >= 10 && parseInt(double) <= 26 && !(s.charAt(i+1) === "0")){
            if (i === 1 && listBeforeBefore === 0) listNow++;
            else listNow+=listBeforeBefore;
        }

        listBeforeBefore = listBefore;
        listBefore = listNow;
    }

    return listNow;
    // return listNow.length;
};

var numDecodings2 = function(s){

    var map = new Map([
        ['1','A'],
        ['2','B'],
        ['3','C'],
        ['4','D'],
        ['5','E'],
        ['6','F'],
        ['7','G'],
        ['8','H'],
        ['9','I'],
        ['10','J'],
        ['11','K'],
        ['12','L'],
        ['13','M'],
        ['14','N'],
        ['15','O'],
        ['16','P'],
        ['17','Q'],
        ['18','R'],
        ['19','S'],
        ['20','T'],
        ['21','U'],
        ['22','V'],
        ['23','W'],
        ['24','X'],
        ['25','Y'],
        ['26','Z']
    ]);

    var listBeforeBefore = [],
        listBefore = [],
        listNow = [],
        single = "",
        double = "";

    for (var i=0; i<s.length; i++){
        double = ""+single+s.charAt(i);
        single = s.charAt(i);

        listNow = [...listBefore];
        if (parseInt(single) > 0 && !(s.charAt(i+1) === "0") && !(i == 1 && s.charAt(i-1) === "0")){
            if (i === 0 && listNow.length === 0) listNow.push(map.get(single));
            else for (j=0; j<listNow.length; j++) listNow[j] = listNow[j]+map.get(single);
        } else listNow = [];

        if (parseInt(double) >= 10 && parseInt(double) <= 26 && !(s.charAt(i+1) === "0")){
            console.log(i, double, s.charAt(i+1));
            if (i === 1 && listBeforeBefore.length === 0) listNow.push(map.get(double));
            else for (j=0; j<listBeforeBefore.length; j++) listNow.push(listBeforeBefore[j]+map.get(double));
        }

        // console.log(i);
        // console.log("BBB:", listBeforeBefore);
        // console.log("BB:", listBefore);
        // console.log("C:",listNow);
        // console.log("");

        listBeforeBefore = [...listBefore];
        listBefore = [...listNow];
    }

    return listNow;
    // return listNow.length;
};

// console.clear();
// console.log(numDecodings("226"));
// console.log(numDecodings("2222"));
// console.log(numDecodings("10"));
// console.log(numDecodings("01"));
// console.log(numDecodings("2101"));
// console.log(numDecodings("10011"));
// console.log(numDecodings("111111111111111111111111111111111111111111111"));