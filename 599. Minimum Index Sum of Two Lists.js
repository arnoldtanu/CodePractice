/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  var map = new Map();
  var result = [];
  var resultCount = Infinity;
  for (var i=0; i<list1.length; i++){
    map.set(list1[i],i);
  }
  for (var i=0; i<list2.length; i++){
    if (typeof map.get(list2[i]) != "undefined"){
      var tempCount = i + map.get(list2[i]);
      if (tempCount == resultCount){
        result.push(list2[i]);
      } else if (tempCount < resultCount){
        result = [list2[i]];
        resultCount = tempCount;
      }
      // console.log(resultCount, tempCount, result);
    }
  }
  return result;
};

console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"],["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"])); // ["Shogun"]
console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"],["KFC","Shogun","Burger King"])); // ["Shogun"]
console.log(findRestaurant(["happy","sad","good"],["sad","happy","good"])); // ["sad","happy"]
