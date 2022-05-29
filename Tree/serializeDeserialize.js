/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or 
transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. 
You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please 
be creative and come up with different approaches yourself.

 

Example 1:
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]

Example 2:
Input: root = []
Output: []
 
Constraints:
The number of nodes in the tree is in the range [0, 104].
-1000 <= Node.val <= 1000
*/

//Time: O(n) | Space: O(n)
var serialize = function(root) {
    const output = [];
    serializeUtil(root, output);
    return JSON.stringify(output);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data?.length === 0) return null;
    return deserializeUtil(JSON.parse(data));
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function serializeUtil(root, output) {
    if (!root) {
        output.push('.');
        return;
    }
    output.push(root.val);
    serializeUtil(root.left, output);
    serializeUtil(root.right, output);
}

function deserializeUtil(list) {
    let val = list.shift();
    if (val === '.') return null;
    let root = new TreeNode(val);
    root.left = deserializeUtil(list);
    root.right = deserializeUtil(list);
    return root;
}
