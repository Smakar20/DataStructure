/*
Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

Example 1:
Input: n = 3
Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

Example 2:
Input: n = 1
Output: [[1]]
 
Constraints:
1 <= n <= 8
*/

var generateTrees = function(n) {
    if (n==0) return []; 
    return createTreeNode(1, n);
};

function createTreeNode(start, end) {
    if (start > end) return [null];
    const res = [];

    for (let i = start; i <= end; i++) {

        let leftTree = createTreeNode(start, i-1);
        let rightTree = createTreeNode(i+1, end);

        for (const curLeft of leftTree) {
            for (const curRight of rightTree) {
                let rootNode = new TreeNode(i, curLeft, curRight);
                res.push(rootNode);
            } 
        }  
    }
    return res;
}
