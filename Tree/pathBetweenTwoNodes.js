/*find a path between two nodes in a binary tree.*/

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
//---------------------------------------

function findPath(root, node1, node2){
  if(!root) return []
  var nodes = [root]
  var start = null, end = null
  for(var node of nodes){
    if(node == node1){
      start = node1
      end = node2
      break
    }else if(node == node2){
      start = node2
      end = node1
      break
    }
    if(node.left) nodes.push(node.left)
    if(node.right) nodes.push(node.right)
  }
  return search(start, end)
}

function search(root, node){
  var output = []
  searchUtil(root,node,output, [])
  return (output.length == 0) ? output : output[0]
}

function searchUtil(root, node, output, currentPath){
  if(!root) return
  currentPath.push(root.val)
  if(root == node){
    output.push(currentPath.slice())
    return
  }
  searchUtil(root.left, node, output, currentPath)
  searchUtil(root.right, node, output, currentPath)
  currentPath.pop()
}


findPath(root1, right1, right4) // [6,8,9]
