/*Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the 
longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree 
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.*/

var diameterOfBinaryTree = function(root) {
    var maxArr = [0]
    maxDepth(root,maxArr)
    return maxArr[0]
};

function maxDepth(root, maxArr){
    if(!root) return 0
    var left = maxDepth(root.left,maxArr)
    var right = maxDepth(root.right,maxArr)
    maxArr[0] = Math.max(left + right, maxArr[0])
    
    return Math.max(left,right) + 1
}

