/*Given a complete binary tree, count the number of nodes.
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as 
far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.*/

var countNodes = function(root) {
    if (!root) return  0
    
    // At any node, if the height of left == height of right then by the virtue of CBT
    // the num of nodes = pow(2, height) - 1. To understand this draw the picture of a CBT with 
    // same height of left and right side. So, we dont need to recurse to get the num for that node.
    
    var hl = 0;
    var hr = 0;
    var current = root
    while(current) {
        hl++
        current = current.left
    }
    
    current = root
    while(current) {
        hr++
        current = current.right
    }
    
    if (hl == hr) {
        return Math.pow(2, hl) - 1 
    }
    
    return 1 + countNodes(root.left) + countNodes(root.right)
};
