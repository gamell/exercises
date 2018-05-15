/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    const start = new ListNode(0);
    let slow = start;
    let fast = start;
    slow.next = head;

    while(n >= 0){
        fast = fast.next;
        n--;
    }

    while(fast !== null){
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return start.next;
};
