/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2){
    var hasil = new ListNode(0), carry = 0;
    var current = hasil;
    while (l1 !== null || l2 !== null){
        var jumlah = 0;
        if (l1 !== null){
            jumlah += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null){
            jumlah += l2.val;
            l2 = l2.next;
        }
        if (carry === 1){
            jumlah += 1;
            carry = 0;
        }
        if (jumlah >= 10) carry = 1;
        jumlah = jumlah % 10;
        current.next = new ListNode(jumlah);
        current = current.next;
    }
    if (carry === 1){
        current.next = new ListNode(1);
    }
    return hasil.next;
};