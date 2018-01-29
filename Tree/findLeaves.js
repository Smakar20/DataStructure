/*Find leaves of binary tree.*/

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
var right2 = right1.insertRight(8)
right2.insertLeft(7)
right2.insertRight(9)


function findLeaves(root){
  if(!root) return []
  var output = []
  findLeavesUtil(root, output)
  return output
}

function findLeavesUtil(root, output){
  if(!root.left && !root.right){
    output.push(root.val)
    return
  }
  if(root.left) findLeavesUtil(root.left,output)
  if(root.right) findLeavesUtil(root.right, output)
}


console.log('using recursion: ',findLeaves(root1)) //[ 1, 3, 5, 7, 9 ]
//---------------------------------------
//alternate method:
function find(root){
  if(!root) return  []
  var output = []
  var nodes = [root]
  for(node of nodes){
    if(!node.left && !node.right) output.push(node.val)
    if(node.left) nodes.push(node.left)
    if(node.right) nodes.push(node.right)
  }
  return output
}


console.log('iterative', find(root1)) //[ 1, 3, 5, 7, 9 ]
