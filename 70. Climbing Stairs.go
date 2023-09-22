package main

import "fmt"

// func recursiveClimbStairs(currStairs int, n int, memo *map[int]int) int {
// 	if (currStairs > n) {
// 		return 0
// 	} else if (currStairs == n) {
// 		return 1
// 	} else if val, hasValue := (*memo)[currStairs]; hasValue {
// 		return val
// 	}

// 	var temp, retVal int;
// 	temp = recursiveClimbStairs(currStairs+1, n, memo)
// 	if (temp > 0){
// 		retVal += temp
// 	}
// 	temp = recursiveClimbStairs(currStairs+2, n, memo)
// 	if (temp > 0){
// 		retVal += temp
// 	}

// 	(*memo)[currStairs] = retVal

// 	return retVal
// }

// func climbStairs(n int) int {
//   memo := make(map[int]int)
// 	return recursiveClimbStairs(0, n, &memo)
// }

func climbStairs(n int) int {
	if n<=3 {
		return n
	}

	n1 := 2
	n2 := 3
	for i:=4; i<=n; i++ {
		n1, n2 = n2, n1+n2
	}
	return n2
}

func main70() {
	fmt.Println(climbStairs((2))) //2
	fmt.Println(climbStairs((3))) //3
	fmt.Println(climbStairs((5))) //3
}
