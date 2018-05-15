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
var sortList = function(head) {

    function merge(l1, l2){
      let l = new ListNode(0);
      let p = l;

      while(l1 !== null && l2 !== null){
        if (l1.val < l2.val){
          p.next = l1;
          l1 = l1.next;
        } else {
          p.next = l2;
          l2 = l2.next;
        }
        p = p.next;
      }

      if(l1 !== null) p.next = l1;
      if(l2 !== null) p.next = l2;

      return l.next;
    }

    if(head === null || head.next === null) return head;
    let prev;
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }

    prev.next = null;

    const l1 = sortList(head);
    const l2 = sortList(slow);

    return merge(l1,l2);
};
