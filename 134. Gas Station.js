/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var routeGasCostList = [],
        sumGroup = 0,
        sumGas = 0,
        sumCost = 0,
        positiveGroup = true;

    for (var i=0; i<gas.length; i++){
        sumGas += gas[i];
        sumCost += cost[i];
        var currValue = gas[i]-cost[i];
        if (i==0){
            if (currValue < 0) positiveGroup = false;
            routeGasCostList.push([currValue,i]);
        }

        sumGroup += currValue;
        var currGroupPositive = (currValue >= 0);

        if (currGroupPositive === positiveGroup){
            routeGasCostList[routeGasCostList.length-1][0] = sumGroup;
        } else {
            sumGroup = currValue;
            positiveGroup = currGroupPositive;
            routeGasCostList.push([currValue,i]);
        }
    }

    console.log(routeGasCostList);

    if (sumGas < sumCost) return -1;
    else {
        for (var i=0; i<routeGasCostList.length; i++){
            var total = 0;
            for (var j=0; j<routeGasCostList.length; j++){
                total += routeGasCostList[(j+i)%routeGasCostList.length][0];
                if (total < 0) break;
            }
            if (total >= 0) return routeGasCostList[i][1];
        }
    }
    return -1;
};

console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]));
// console.log(canCompleteCircuit([5,1,2,3,4],[4,4,1,5,1]));
