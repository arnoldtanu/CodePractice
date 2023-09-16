package main

import "fmt"

func twoSum(nums []int, target int) []int {
	countedNum := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		// fmt.Println("loc skrg",i,countedNum)
		remainder := target - nums[i]
		if val, found := countedNum[remainder]; found {
			return []int{i,val}
		} else {
			countedNum[nums[i]] = i
		}
	}
	return nil
}

func main1() {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9)) //[0,1]
}