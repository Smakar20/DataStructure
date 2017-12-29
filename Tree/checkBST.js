//check if a binary tree is BST or not.

class Tree{
  constructor(val){
    this.val = val
    this.left = null
    this.right = null
  }
  
  insertLeft(val){
    this.left = new Tree(val)
    return this.left
  }
  
  insertRight(val){
    this.right = new Tree(val)
    return this.right
  }
}

var max = 4294967296,
min = -4294967296

function checkTree(root){
  return isBST(root, min, max)
}

function isBST(root, min, max){
  if(!root) return true
  if(root.val < min || root.val > max) return false
  return (isBST(root.left, min, root.val - 1) && isBST(root.right, root.val + 1, max))
}

// ----- test ------
var root = new Tree(1)
var left = root.insertLeft(2)
var right = root.insertRight(3)
left.insertLeft(4)
left.insertRight(5)
right.insertLeft(6)
right.insertRight(7)
console.log('1st test: ',checkTree(root)) // false
//-----------------
var root = new Tree(6)
var left = root.insertLeft(4)
var right = root.insertRight(8)
left.insertLeft(3)
left.insertRight(5)
right.insertLeft(7)
right.insertRight(9)
console.log('2nd test: ',checkTree(root)) // true
