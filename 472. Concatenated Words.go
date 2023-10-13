package main

import (
	"fmt"
	"sort"
)

func isConcatenatedWord(originalWord *string, word string, dict *map[string]bool) bool {
	result := false
	str := ""
	// fmt.Println(word)
	if word == "" {
		return true
	}

	for curr:=0; curr<len(word); curr++{
		str = str + string(word[curr])
		if (*dict)[str] && (*originalWord) != str {
			result = result || isConcatenatedWord(originalWord,word[curr+1:],dict)
			if result {
				break;
			}
		}
	} 

	return result
}

func findAllConcatenatedWordsInADict(words []string) []string {
  result := []string{}
	dict := map[string]bool{};

	sort.Slice(words,func(i, j int) bool {
		return len(words[i]) < len(words[j])
	})

	minLength := len(words[0])

	for _, s := range words{
		if len(s) >= minLength*2 && isConcatenatedWord(&s,s,&dict){
			result = append(result, s)
		} else {
			dict[s] = true
		}
	}

	return result
}

func main472() {
	fmt.Println(findAllConcatenatedWordsInADict([]string{"cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"})) //["catsdogcats","dogcatsdog","ratcatdogcat"]
	// fmt.Println(findAllConcatenatedWordsInADict([]string{"cat","dog","catdog"})) //["catdog"]
	// fmt.Println(findAllConcatenatedWordsInADict([]string{"cat","cats","catsdogcats","dog"})) //["catsdog"]
}
