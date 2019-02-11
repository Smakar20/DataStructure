/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example, given a 3-ary tree:

              1
     3        2       4
  5     6   

We should return its level order traversal:

[
     [1],
     [3,2,4],
     [5,6]
]
 

Note:

The depth of the tree is at most 1000.
The total number of nodes is at most 5000.

*/
 
 
var levelOrder = function(root) {
    if(!root) return [];
    var stack = [root, '-'];
    var current = [];
    var output = [];
    for (var i = 0;i < stack.length; i++){
        if (stack[i] === '-' && current.length!== 0){
            output.push(current.slice());
            current.length = 0;
            stack.push('-');
            continue;
        }else {
            current.push(stack[i].val);
        }
        
        if(!stack[i].children) continue;
        for(var ch of stack[i].children) stack.push(ch);
    }
    return output;
};

