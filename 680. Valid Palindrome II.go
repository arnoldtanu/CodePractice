package main

import (
	"fmt"
)

func validPalindrome(s string) bool {
	left := 0
	right := len(s)-1
	checkPoint := -1
	returnToCheckpoint := false
	for (left < right){
		// fmt.Println(left, right, string(s[left]), string(s[right]))
		if (s[left] == s[right]){
			left++
			right--
			continue
		}

		if (checkPoint < 0){
			checkPoint = left
			left++
		} else if (!returnToCheckpoint){
			returnToCheckpoint = true
			left = checkPoint
			right = len(s)-1-left
			right--
		} else {
			return false
		}
	}

	return true;
}

func main680() {
	fmt.Println(validPalindrome("aba")) //true
	fmt.Println(validPalindrome("abca")) //true
	fmt.Println(validPalindrome("abc")) //false
	fmt.Println(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga")) //true
	fmt.Println(validPalindrome("abca")) //true
	fmt.Println(validPalindrome("acxcybycxcxa")) //true
}