/*Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never 
differ by more than 1.


Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
 */
 
 var sortedArrayToBST = function(nums) {
    if(nums.length == 0) return null
    var root = sortedArrayToBSTUtil(nums, 0, nums.length - 1)
    return root
};

function sortedArrayToBSTUtil(arr, start, end){
    if(start > end) return null
    var mid = parseInt((start + end)/2)
    var root = new TreeNode(arr[mid])
    root.left = sortedArrayToBSTUtil(arr, start, mid-1)
    root.right = sortedArrayToBSTUtil(arr, mid+1, end)
    return root
}

