function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let orphan = null;
    let finished = false;
    function reverse(one, two, n){
      if(!two || n === 0) {
        finished = n === 0;
        orphan = two;
        return one;
      }
      let next = two.next;
      two.next = one;
      return reverse(two, next, n-1);
    }
    if (head === null) return null;
    let newHead = reverse(null, head, k);
    if(!finished){
      // reverse the last reversion as we didn't have enough items in the group
      newHead = reverse(null, newHead, k);
    } else {
      // head now will be the last  element of the subgroup
      head.next = reverseKGroup(orphan, k);
    }
    return newHead;
};

let head = new ListNode(1);
head.next = new ListNode(2);

console.log(reverseKGroup(head, 2));
