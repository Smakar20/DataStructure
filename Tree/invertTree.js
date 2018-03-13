/*Invert a binary tree.
     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

var invertTree = function(root) {
    if(!root) return null
    var stack =[]
    stack.push(root)
        
    while(stack.length != 0) {
        var node = stack.pop()
        var left = node.left
        node.left = node.right
        node.right = left
            
        if(node.left != null) {
            stack.push(node.left)
        }
        if(node.right != null) {
            stack.push(node.right)
        }
    }
    return root
};

