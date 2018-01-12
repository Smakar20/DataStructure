/*Find the maximum depth of a binary tree.*/

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

var root = new Tree(1)
var left = root.insertLeft(2)
var right = root.insertRight(3)
left.insertLeft(4)
left.insertRight(5)

 
function maxDepth(root){
  if(!root) return 0
  var leftDep = maxDepth(root.left)
  var rightDep = maxDepth(root.right)
    
  return Math.max(leftDep,rightDep) + 1
}

//-----test--------
maxDepth(root)

