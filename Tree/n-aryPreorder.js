/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 
Given an n-ary tree, return the preorder traversal of its nodes' values.

For example, given a 3-ary tree:

        1
    3   2   4
  5  6 


Return its preorder traversal as: [1,3,5,6,2,4].

 

Note:

Recursive solution is trivial, could you do it iteratively?

 */
var preorder = function(root) {
    if (!root) return [];
    var output = [];
    var stack = [];
    //traverse(root, output); // recursive solution
    //iterative solution - start
    var node = root;
    while(node){
        output.push(node.val);
        if (node.children){
            for (var i = node.children.length - 1; i >= 0; i--){
                stack.push(node.children[i]);
            }
        }
        node = stack.pop();
    }
    //iterative solution - end
    return output;
};

function traverse(root, arr){
    if (root){
        arr.push(root.val);
        for(var node of root.children){
            traverse(node, arr);
        }
    }
}
