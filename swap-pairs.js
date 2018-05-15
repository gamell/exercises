/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head === null) return null;
    if(head.next === null) return head;
    let newHead = head.next;
    head.next = head.next.next;
    newHead.next = head;
    newHead.next.next = swapPairs(newHead.next.next);
    return newHead;
};
