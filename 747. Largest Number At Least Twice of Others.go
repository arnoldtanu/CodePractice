package main

import (
	"fmt"
)

func dominantIndex(nums []int) int {
	largestIndex := 0
	secondLargest:= -1
  for i:=1; i<len(nums); i++ {
		if (nums[i] > nums[largestIndex]){
			secondLargest = largestIndex
			largestIndex = i
			continue
		}
		if (secondLargest < 0 || nums[i] > nums[secondLargest]){
			secondLargest = i
		}
	}
	if nums[largestIndex] >= 2*nums[secondLargest]{
		return largestIndex
	} 
	return -1
}

func main747() {
	fmt.Println(dominantIndex([]int{3,6,1,0})) //1
	fmt.Println(dominantIndex([]int{1,2,3,4})) //-1
	fmt.Println(dominantIndex([]int{1,0})) //0
	fmt.Println(dominantIndex([]int{0,0,3,2})) //-1
}