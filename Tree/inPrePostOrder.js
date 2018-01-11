//Tree inorder, preOrder and postOrder traversal.
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

function inOrder(root){
  if(!root) return null
  if(root.left) inOrder(root.left)
  console.log(root.val)
  if(root.right) inOrder(root.right)
}

function preOrder(root){
  if(!root) return
  console.log(root.val)
  if(root.left) preOrder(root.left)
  if(root.right) preOrder(root.right)
}

function postOrder(root){
  if(!root) return
  if(root.left) postOrder(root.left)
  if(root.right) postOrder(root.right)
  console.log(root.val)
}

//------ test --------
console.log('-----inOrder-------')
inOrder(root) //4 2 5 1 3
console.log('-----preOrder-------')
preOrder(root) //1 2 4 5 3
console.log('-----postOrder--------------')
postOrder(root) //4 5 2 3 1
