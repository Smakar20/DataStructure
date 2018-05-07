/*Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the 
next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
] */

var zigzagLevelOrder = function(root) {
    if(!root) return []
    var nodes = [root, '-']
    var output = [], level = 0, temp = []
    for(var node of nodes){
        if(node == '-' && temp.length != 0){
            if(level%2 != 0) temp.reverse()
            output.push(temp.slice())
            temp.length = 0
            level += 1
            nodes.push('-')
        }else{
            temp.push(node.val)
        }
        
        if(node.left) nodes.push(node.left)
        if(node.right) nodes.push(node.right)
    }
    return output
};
