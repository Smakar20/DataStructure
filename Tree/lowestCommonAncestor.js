//Given the value of two nodes in a binary search tree, find the lowest (nearest) common ancestor. You mayassume that both values already exist in the tree.
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

var root = new Tree(4)
var left = root.insertLeft(2)
var right = root.insertRight(6)
left.insertLeft(1)
left.insertRight(3)
right.insertLeft(5)
right.insertRight(7)

function lowestCommonAncestor(root,v1,v2){
  if(!root) return 'root can not be null'
  while(root){
    if(root.val > v1 && root.val > v2){
      root = root.left
    }else if(root.val < v1 && root.val < v2){
      root = root.right
    }else{
      return root
    }
  }
}


//alternate method using recursion
function lowestCommonAncestor(root,v1,v2){
  if(!root) return 'root can not be null'
  if(root.val > v1 && root.val > v2 && root.left){
    return lowestCommonAncestor(root.left,v1,v2)
  } 
  if(root.val < v1 && root.val < v2 && root.right){
    return lowestCommonAncestor(root.right,v1,v2)
  }
  return root
}

//------ test --------
lowestCommonAncestor(root,7,5) // node with val 6
