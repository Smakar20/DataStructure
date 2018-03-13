/*Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the 
given target.

Example 1:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True
Example 2:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False*/

var findTarget = function(root, k) {
    var newSet = new Set()
    return search(root, newSet, k)
};

function search(root, nodeSet, val){
    if(!root) return false
    if(nodeSet.has(val - root.val)) return true
    nodeSet.add(root.val)
    return search(root.left, nodeSet, val) || search(root.right, nodeSet, val)
}
