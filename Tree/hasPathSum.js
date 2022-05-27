/*Given a binary tree and a targetSum, determine if the tree has a root-to-leaf path such that adding up all the values along the 
path equals the given targetSum.

For example:
Given the below binary tree and targetSum = 22,

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which targetSum is 22.*/

var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    if (!root.right && !root.left && root.val === targetSum) return true;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
