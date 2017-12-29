//Given a binary tree check if it's symmetric or it is a mirror image of itself.

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

function isSymmetric(leftChild, rightChild){
  if(!leftChild && !rightChild) return true
  if(!leftChild || !rightChild) return false
  return ((leftChild.val == rightChild.val) && isSymmetric(leftChild.left,rightChild.right) && isSymmetric(leftChild.right, rightChild.left))
}


// ----- test ------
var root = new Tree(1)
var left = root.insertLeft(2)
var right = root.insertRight(3)
left.insertLeft(4)
left.insertRight(5)
right.insertLeft(6)
right.insertRight(7)
console.log('1st case: ',isSymmetric(root,root)) //false
//-----------------
var root = new Tree(1)
var left = root.insertLeft(2)
var right = root.insertRight(2)
left.insertLeft(4)
left.insertRight(5)
right.insertLeft(5)
right.insertRight(4)
console.log('2nd case: ',isSymmetric(root,root)) //true

