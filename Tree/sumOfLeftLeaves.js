/*Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
*/

var sumOfLeftLeaves = function(root) {
    if(!root) return 0
    var sum = 0
    var nodes = [root]
    for(var node of nodes){
        if(node.left){
            nodes.push(node.left)
            if(!node.left.left && !node.left.right) sum += node.left.val
        }
        if(node.right){
            nodes.push(node.right)
        }
    }
    return sum
};
