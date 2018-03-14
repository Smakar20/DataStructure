/*Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

For example,
Given n = 3, there are a total of 5 unique BST's.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/


var numTrees = function(n) {
    return countBST(n, new Map())
};

function countBST(n, numMap){
    if(n == 0 || n == 1) return 1
    if(n == 2) return 2
    if(numMap.has(n)) return numMap.get(n)
    
    var count = 0
    for(var i = 1; i <= n; i++){
        count += countBST(i-1, numMap)*countBST(n-i, numMap)
    }
    numMap.set(n, count)
    return count
}

