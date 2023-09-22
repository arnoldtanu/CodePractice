package main

import (
	"fmt"
	"strings"
)

func simplifyPath(path string) string {
	result := make([]string,0)
	s := strings.Split(path, "/")
	// fmt.Println(s)
	for i:=0; i<len(s); i++{
		if (s[i] == "" || s[i] == "."){
			continue
		} else if (s[i] == "..") {
			if (len(result)>0){
				result = result[:len(result)-1]
			}
		} else { 
			result = append(result, s[i])
		}
	}

	return "/" + strings.Join(result, "/")
}

func main71() {
	fmt.Println(simplifyPath("/home/")) //"/home"
	fmt.Println(simplifyPath("/../")) //"/"
	fmt.Println(simplifyPath("/home//foo/")) //"/home/foo"
}
