// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;
  const rootIdx = Math.trunc(nums.length / 2);
  const node = new TreeNode(nums[rootIdx]);
  node.left = sortedArrayToBST(nums.slice(0, rootIdx));
  node.right = sortedArrayToBST(nums.slice(rootIdx + 1, nums.length));
  return node;
};