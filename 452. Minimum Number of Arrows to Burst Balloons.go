package main

import (
	"fmt"
	"sort"
)

func findMinArrowShots(points [][]int) int {
	sort.Slice(points,func(i, j int) bool {
		return points[i][1] < points[j][1]
	})
	max, ret := points[0][1], 1
	// fmt.Println(points)
	for i:=1; i<len(points); i++ {
		if max < points[i][0] {
			ret++
			max = points[i][1]
		}
	}
	return ret
}

func main452() {
	fmt.Println(findMinArrowShots([][]int{{10,16},{2,8},{1,6},{7,12}})) //2
	fmt.Println(findMinArrowShots([][]int{{1,2},{3,4},{5,6},{7,8}})) //4
	fmt.Println(findMinArrowShots([][]int{{1,2},{2,3},{3,4},{4,5}})) //2
	fmt.Println(findMinArrowShots([][]int{{3,9},{7,12},{3,8},{6,8},{9,10},{2,9},{0,9},{3,9},{0,6},{2,8}})) //2
	fmt.Println(findMinArrowShots([][]int{{9,12},{1,10},{4,11},{8,12},{3,9},{6,9},{6,7}})) //1
}
