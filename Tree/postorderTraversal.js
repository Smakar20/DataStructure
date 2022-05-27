/*
Given the root of a binary tree, return the postorder traversal of its nodes' values.

 1
  \
    2
  /
 3

Example 1:
Input: root = [1,null,2,3]
Output: [3,2,1]

Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [1]
Output: [1]

Constraints:
The number of the nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

var postorderTraversal = function(root) {
    if (!root) return [];
    const output = [];
    let stack = [root];
    while (stack.length) {
        var node = stack.pop();
        // insert the node val to the front
        output.push(node.val);

        if (node.left) stack.push(node.left); // left first
        if (node.right) stack.push(node.right); // then right
    }
    output.reverse();
    return output;
};

//recursive
function postorderTraversalUtil(root, output) {
    if (!root) return;
    postorderTraversalUtil(root.left, output);
    postorderTraversalUtil(root.right, output);
    output.push(root.val);
}

