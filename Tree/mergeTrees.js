/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped 
while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new 
value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:

Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  

Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
 

Note: The merging process must start from the root nodes of both trees.

 */
// mutating existing tree
var mergeTrees = function(t1, t2) {
    if(!t1) return t2;
    if(!t2) return t1;
    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
};

// return a new tree
function mergeTrees(tree1, tree2) {
  if (!tree1) return tree2;
  if (!tree2) return tree1;
  let mergedTree = new TreeNode(tree1.value + tree2.value);
  mergedTree.left = mergeTrees(tree1.left, tree2.left);
  mergedTree.right = mergeTrees(tree1.right, tree2.right);
  return mergedTree;
}
