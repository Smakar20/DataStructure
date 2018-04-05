/*Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the 
original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
          
*/

var convertBST = function(root) {
    if (!root) return []
    
    var output = []
    var stack = [root]
    var current = root.right
    var prev = null
    while(stack.length > 0 || current ) {
        while(current) {
            stack.push(current)
            current = current.right
        }

        current = stack.pop()        
        current.val = current.val + (prev ? prev.val : 0)
        prev = current
        
        current = current.left
    }
    
    return root
};
