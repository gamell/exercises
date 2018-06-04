// https://leetcode.com/problems/reverse-linked-list/description/

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        if (head == null) return head;
        ListNode node = head.next;
        ListNode prev = head;
        ListNode temp;
        head.next = null;
        while(node != null) {
            temp = node.next;
            node.next = prev;
            prev = node;
            node = temp;
        } // end of the list
        return prev;
    }
}