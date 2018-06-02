// symmetric tree
// https://leetcode.com/problems/symmetric-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var compare = function(left, right) {
  if (left === null && right === null) return true;
  if (left && right && left.val === right.val) return compare(left.right, right.left) && compare(left.left, right.right);
  return false;
}

/**
* @param {TreeNode} root
* @return {boolean}
*/
var isSymmetric = function(root) {
  if (!root) return true;
  return compare(root.left, root.right);
};