/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var urut = []; urut[0] = -1;
    var skrg = new ListNode(0,head);
    head = skrg;
    
    function back(skrg, n){
        if (skrg.next !== null){
            back(skrg.next, n);
        } else urut[0]=n;
        if (urut[0]===0){
            var temp = skrg.next;
            if (temp === null){
                skrg.next = null;
            } else {
                temp = temp.next;
                skrg.next = temp;                
            }
        }
        urut[0]--;
    }
    
    back(skrg,n);
    return head.next;
};