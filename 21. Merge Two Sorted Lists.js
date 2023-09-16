/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2){
  var curr = list1;
  if (list1 == undefined || list2 == undefined){
    if (list1 == undefined) return list2;
    else return list1;
  } else if (list1.val <= list2.val){
    curr = list1;
    list1 = list1.next;
  } else {
    curr = list2;
    list2 = list2.next;
  }
  var head = curr;
  while (true){
    if (list1 == undefined){
      curr.next = list2;
      return head;
    } else if (list2 == undefined){
      curr.next = list1;
      return head;
    }
    if (list1.val < list2.val){
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
};

// console.log(mergeTwoLists([1,2,4],[1,3,4])); //[1,1,2,3,4,4]
// console.log(mergeTwoLists([],[])); //[]
// console.log(mergeTwoLists([],[0])); //[0]
