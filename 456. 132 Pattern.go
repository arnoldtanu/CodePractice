package main

import (
	"fmt"
)

type Minimal struct{
	val, loc int
}

func find132pattern(nums []int) bool {
	if len(nums)<3 {
		return false;
	}

	result := false
	keepLoop := true
	nextMin := Minimal{
		val: nums[0],
		loc: 0,
	}
	var currMin Minimal

	for keepLoop{
		keepLoop = false
		currMin = nextMin
		max := currMin.val
		for i:=currMin.loc+1; i<len(nums); i++{
			//fmt.Println("Curr Value:", nums[i], "max:",max, "min:",currMin)
			if (nums[i] < currMin.val){
				if (currMin.val == max){
					currMin.val = nums[i]
					currMin.loc = i
					max = nums[i]
					//fmt.Println("change min", currMin)
				} else if currMin.loc == nextMin.loc{
					keepLoop = true
					nextMin = Minimal{
						val: nums[i],
						loc: i,
					}
					//fmt.Println("add min", currMin, nextMin)
				}
				continue
			}

			if currMin.val+1 < nums[i] && max < nums[i]{
				max = nums[i]
				//fmt.Println("change max", max)
				continue
			}

			if currMin.val < nums[i] && max > nums[i]{
				return true
			}
		}
	}
	return result
}

func main456() {
	fmt.Println(find132pattern([]int{1,2,3,4})) //false
	fmt.Println(find132pattern([]int{3,1,4,2})) //true
	fmt.Println(find132pattern([]int{-1,3,2,0})) //true
	fmt.Println(find132pattern([]int{1,2,0,1,2,3,-1,2})) //true
	fmt.Println(find132pattern([]int{1,2,3,4,-4,-3,-5,-1})) //false
}
