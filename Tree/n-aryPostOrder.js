/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 Given an n-ary tree, return the postorder traversal of its nodes' values.

For example, given a 3-ary tree:
              1
       3      2     4
    5    6   
 
Return its postorder traversal as: [5,6,3,2,4,1].

Note:

Recursive solution is trivial, could you do it iteratively?

 */
var postorder = function(root) {
    if(!root) return [];
    var output = [];
    // traverse(root, output); // recursive solution
    // iterative solution - start
    var stack = [root];
    
    while(stack.length > 0){
        var node = stack.pop();
        output.unshift(node.val);
        if(!node.children) continue;
        for(var ch of node.children){
            stack.push(ch);
        }
        
    }
    // iterative solution - end
    return output;
};


function traverse(root, arr){
    if(root){
        for (var node of root.children){
            traverse(node, arr);
        }
        arr.push(root.val);
    }
}
