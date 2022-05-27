/*
Given the root of a binary tree, return the number of uni-value subtrees.

A uni-value subtree means all nodes of the subtree have the same value.

              5
           /     \ 
          1        5
         / \        \
        5   5         5

Example 1:
Input: root = [5,1,5,5,5,null,5]
Output: 4

Example 2:
Input: root = []
Output: 0     

Example 3:
Input: root = [5,5,5,5,5,null,5]
Output: 6
 
Constraints:
The number of the node in the tree will be in the range [0, 1000].
-1000 <= Node.val <= 1000
*/

//Time: O(n) | Space: O(h)
var countUnivalSubtrees = function(root) {
    let ans = [0];
    dfs(root, ans);
    return ans[0];
};

function dfs(node, ans) {
    if(!node) {
        return true;
    }
    if(!node.left && !node.right) {
        ans[0]++;
        return true;
    }
    
    let leftRes = dfs(node.left, ans);
    let rightRes = dfs(node.right, ans);
    
    let isUnival = true;
    
    if(!leftRes || !rightRes || (node.left && node.left.val != node.val) || (node.right && node.right.val != node.val)) {
        isUnival = false;
    }
    
    if(isUnival) {
        ans[0]++;
    }
    return isUnival;
};
