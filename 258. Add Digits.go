package main

import "fmt"

func addDigits(num int) int {
	if (num < 10) {
		return num
	}
	remainder := 0

	for (num > 0){
		remainder = remainder + num % 10
		if remainder >= 10 {
			remainder = remainder / 10 + remainder % 10
		}
		num = num / 10
		fmt.Println(num, remainder)
	}

	return remainder
}

func main258() {
	fmt.Println(addDigits(38)) //2
	fmt.Println(addDigits(0)) //0
	fmt.Println(addDigits(7318453)) //4
}
