/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
   
  */
 
 
var buildTree = function(preorder, inorder) {
  if (!preorder.length) return null;
  
  const root = preorder.splice(0, 1)[0];
  const node = new TreeNode(root);
  
  const rootIndex = inorder.indexOf(root);
  
  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);
  
  const leftPreorder = preorder.slice(0, leftInorder.length);
  const rightPreorder = preorder.slice(leftPreorder.length);
  
  node.left = leftPreorder.length ? buildTree(leftPreorder, leftInorder) : null;
  node.right = rightPreorder.length ? buildTree(rightPreorder, rightInorder) : null;
  
  return node;
};
