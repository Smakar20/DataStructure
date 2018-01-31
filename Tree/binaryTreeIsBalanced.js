/*If a binary tree is balanced.*/

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
//-----------------------------
function maxDepth(root){
  if(!root) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

function minDepth(root){
  if(!root) return 0
  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
}

function isBalanced(root){
  if(!root) return
  return (maxDepth(root) - minDepth(root) <= 1)
}
//-----------------------------
var root = new Tree(4)
var left = root.insertLeft(2)
var right = root.insertRight(6)
var left1 = left.insertLeft(1)
left.insertRight(3)
right.insertLeft(5)
right.insertRight(7)
var left2 = left1.insertLeft(4)
left2.insertLeft(5)
left2.insertRight(7)

isBalanced(root) //false
