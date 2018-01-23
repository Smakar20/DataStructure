/*Given root and a value, determine the path to the node with the given value in a binary tree. 
You can assume that the value is present in the tree.
*/

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


function findPathUtil(root,val){
  var path = [], foundPath = []
  findPath(root, 5, path, foundPath)
  return foundPath
}

function findPath(root, val, path, foundPath){
  if(!root) return 'root can not be null'
  path.push(root.val)
  if(root.val == val){
    //console.log('path: ', path)
    path.forEach((ele)=>{
      foundPath.push(ele)
    })
  }
  if(root.left) findPath(root.left,val, path, foundPath)
  if(root.right) findPath(root.right,val, path, foundPath)
  path.pop()
}

//-----test--------
 findPathUtil(root, 5)//[ 1, 2, 5 ]
 
