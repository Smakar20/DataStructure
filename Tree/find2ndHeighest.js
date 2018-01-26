//find node with second heights value in a BST.

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

var root1 = new Tree(4)
var left1 = root1.insertLeft(2)
var right1 = root1.insertRight(6)
var left2 = left1.insertLeft(1)
var right2 = left1.insertRight(3)
var left3 = right1.insertLeft(5)
var right3 = right1.insertRight(8)
var right4 = right3.insertRight(9)
//---------------------------------

function findHeighest(root){
  if(!root) return
  if(root.right) return findHeighest(root.right)
  return root.val
}

function find2ndHeighest(root){
  if(!root || (!root.left && !root.right)) return
  
  if(root.left && !root.right) return findHeighest(root.left)
  
  if(root.right && !root.right.right && !root.right.left) return root.val
  return find2ndHeighest(root.right)
}


find2ndHeighest(root1) //8
