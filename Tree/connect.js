/*
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
          1 -> null
        /   \
       2  ->  3 -> null
     /   \   /  \
    4 ->  5->6-> 7 -> null 
          
Example 1:
Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

Example 2:
Input: root = []
Output: []
 

Constraints:
The number of nodes in the tree is in the range [0, 212 - 1].
-1000 <= Node.val <= 1000
*/

//Time: O(n) | space: O(1)
var connect = function(root) {
    if (!root) return null;
    let leftMost = root;
    while (leftMost.left) {
        let head = leftMost;
        while (head) {
            head.left.next = head.right;
            if (head.right && head.next) head.right.next = head.next.left;
            head = head.next;
        }
        leftMost = leftMost.left;
    }
    return root;
};

//Time: O(n) | Space: O(n)
//iterative
var connect = function(root) {
    if (!root) return null;
    const stack = [root, '#'];
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] !== '#') {
            if (stack[i + 1] !== '#') stack[i].next = stack[i + 1];
            else stack[i].next = null;
        } else {
            if (stack[i + 1]) stack.push('#');
            continue;
        }
        if (stack[i].left) stack.push(stack[i].left);
        if (stack[i].right) stack.push(stack[i].right);
    }
    return root;
};

//recursive
var connect = function(root) {
    if(!root) return root
    
    if(root.left) root.left.next = root.right
    if(root.right && root.next) root.right.next = root.next.left
    
    connect(root.left)
    connect(root.right)
    return root
};
