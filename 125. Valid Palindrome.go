package main

import "fmt"

func checkChar(char byte) byte {
	if char>=65 && char<=90 {
		return char+32
	} else if (char>=97 && char<=122) || (char>=48 && char<=57) {
		return char
	}
	return 0
}

func isPalindrome(s string) bool {
	left, right := 0, len(s)-1
	for left <= right {
		
		l:=checkChar(s[left])
		// fmt.Println("left:",left,", l:", l)
		if l==0 {
			left++
			continue
		}

		r:=checkChar(s[right])
		// fmt.Println("right:",right,", r:", r)
		if r==0 {
			right--
			continue
		}

		// fmt.Println(l, "==", r , l==r)
		if l != r {
			return false
		}
		left++
		right--
	}
  return true
}

func main125() {
	fmt.Println(isPalindrome("A man, a plan, a canal: Panama")) //true
	fmt.Println(isPalindrome("race a car")) //false
	fmt.Println(isPalindrome(" ")) //true
	fmt.Println(isPalindrome("0P")) //false
}
