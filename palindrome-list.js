/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head;
    let slow = head;

    function reverse(head){
        let prev = null;
        while (head !== null) {
            const next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast !== null){
        slow = slow.next;
    }
    let rev = reverse(slow);
    while (rev !== null) {
        if (rev.val !== head.val) return false;
        rev = rev.next;
        head = head.next;
    }
    return true;
};
