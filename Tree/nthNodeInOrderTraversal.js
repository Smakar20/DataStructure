/*Find the n-th node in an in-order search of a tree*/

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

var count = 0, found = false
function nthNodeInOrderTraversal(root,n){
  if(!root) return null
  if(!found){
  if(root.left) nthNodeInOrderTraversal(root.left,n)
  count++
  if(count == n){
    console.log(root.val)
    found = true
  }
  if(root.right) nthNodeInOrderTraversal(root.right,n)
  }
}

//-----test--------
nthNodeInOrderTraversal(root,2)
