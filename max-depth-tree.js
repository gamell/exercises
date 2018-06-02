// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let max = 1 + Math.max(maxDepth(root.right) , maxDepth(root.left));
  return max;
};


// more performant

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, depth = 0) {
  if (!root) return depth;
  let max = Math.max(maxDepth(root.right, depth + 1) , maxDepth(root.left, depth + 1));
  return max;
};