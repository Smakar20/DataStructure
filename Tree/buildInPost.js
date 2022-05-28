/*
Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the 
same tree, construct and return the binary tree.

                3
              /    \ 
             9      20
                    / \
                   15  7

Example 1:
Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]

Example 2:
Input: inorder = [-1], postorder = [-1]
Output: [-1]
 
Constraints:
1 <= inorder.length <= 3000
postorder.length == inorder.length
-3000 <= inorder[i], postorder[i] <= 3000
inorder and postorder consist of unique values.
Each value of postorder also appears in inorder.
inorder is guaranteed to be the inorder traversal of the tree.
postorder is guaranteed to be the postorder traversal of the tree.
*/

// Time: O(n) | Space: O(n)
var buildTree = function(inorder, postorder) {
    let nodeMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        nodeMap.set(inorder[i], i);
    }
    
    function buildTreeUtil(start, end) {
     if (start > end) return null;
        const val = postorder.pop();
        const id = nodeMap.get(val);
        const node = new TreeNode(val);
        node.right = buildTreeUtil(id + 1, end);
        node.left = buildTreeUtil(start, id - 1);
        return node;
    }
    
    return buildTreeUtil(0, inorder.length - 1);
};
