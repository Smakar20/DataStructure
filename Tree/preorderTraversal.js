/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
Follow up: Recursive solution is trivial, could you do it iteratively?

 */

var preorderTraversal = function(root) {
    if (!root) return [];
    var output = [];
    var node = root;
    //traverse(root, output); // for recursive solution
    // iterative solution - start
    var stack = [];
    while(node){
        output.push(node.val);
        if (node.right) stack.push(node.right);
        node = node.left || stack.pop();
    }
    // iterative solution - end
    return output;
};



function traverse(root, output){
    if (root){
        output.push(root.val);
        traverse(root.left, output);
        traverse(root.right, output);
    }
}
