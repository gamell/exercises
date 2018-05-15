/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(r) {
  function solve(root, min, max){
    if(root === null) return true;
    if(root.val >= max || root.val <= min) return false;
    return solve(root.left, min, root.val) && solve(root.right, root.val, max);
  }
  return solve(r, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
 };

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(10);
root.left = new TreeNode(5);
let right = new TreeNode(15);
right.left = new TreeNode(6);
right.right = new TreeNode(20);
root.right = right;

console.log(isValidBST(root));
