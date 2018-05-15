function ListNode(val) {
    this.val = val;
    this.next = null;
}

function print(node) {
  if(node){
    console.log(node.val);
    return print(node.next);
  }
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {

     function ends(node, i){
         if(i < 0) return false;
         if(node === null && i === 0){
             return true;
         }
         return ends(node.next, i-1);
     }

     function removeElem(node){
         if(ends(node.next, n)){
             node.next = node.next.next;
             return;
         }
         return removeElem(node.next);
     }

     const h = {next: head};
     removeElem(h);
     return h.next;
 };

// create List

const node = new ListNode(1);
node.next = new ListNode(2);

const res = removeNthFromEnd(node,1);

print(res);
