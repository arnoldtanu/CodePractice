/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height){
    var l=0, r=height.length-1, maxBreadth = 0;

    // find the Max Breadth from most left and right, then to middle from both way
    while(l<r){
        var breadth = (height[l]>height[r]?height[r]:height[l]);
        breadth = breadth * (r-l);
        if (maxBreadth < breadth) maxBreadth = breadth;
        if (height[l]>height[r]) r--; else l++;
    }
    return maxBreadth;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));