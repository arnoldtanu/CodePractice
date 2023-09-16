package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func createTree(treeStack *[]int, curpos int, null *int) *TreeNode {
	var result TreeNode
	result.Val = (*treeStack)[curpos-1]
	fmt.Println("node ", result.Val)

	//left
	if nextpos := curpos*2; nextpos <= len(*treeStack) && (*treeStack)[nextpos-1] != *null {
		fmt.Println(result.Val,".left ", (*treeStack)[nextpos -1])
		result.Left = createTree(treeStack, nextpos, null)
	} else {
		result.Left = nil
	}

	//right
	if nextpos := curpos * 2 + 1; nextpos <= len(*treeStack) && (*treeStack)[nextpos-1] != *null {
		fmt.Println(result.Val,".right ", (*treeStack)[nextpos-1])
		result.Right = createTree(treeStack, nextpos, null)
	} else {
		result.Right = nil
	}

	return &result
}

func recursive(level int, tree *TreeNode, result *[]int){
	if tree == nil {
		return
	}
  // fmt.Println(tree.Val)
	if (len(*result) <= level){
		*result = append(*result, tree.Val)
	} else {
		(*result)[level] = tree.Val
	}

	if tree.Left != nil {
		// fmt.Println(tree.Val,".Left: ",tree.Left.Val)
		recursive(level+1, tree.Left, result)
	}
	if tree.Right != nil {
		// fmt.Println(tree.Val,".Right: ",tree.Right.Val)
		recursive(level+1, tree.Right, result)
	}
}

func rightSideView(root *TreeNode) []int {
	var result = []int{};
	recursive(0, root, &result)
	return result;
}

func main199() {
	null := -101
	// treeStack := []int{1, 2, 3, null, 5, null, 4} //[1,3,4]
	// treeStack := []int{1,null,3} //[1,3]
	treeStack := []int{} //[]
	tree := createTree(&treeStack, 1, &null)
	result := rightSideView(tree)
	fmt.Println(result)
}
