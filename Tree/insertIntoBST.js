/*Insert a node into Balaced search tree.*/

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
left1.insertLeft(1)
left1.insertRight(3)
right1.insertLeft(5)
right1.insertRight(8)
console.log('root: ', root1)
function insert(root, val){
  if(!root){
    root = new Tree(val)
    return root
  }
  
  if(val < root.val){
    root.left = insert(root.left, val)
  }
  else if(val > root.val){
    root.right = insert(root.right, val)
  }
  return root
}

insert(root1,7)
