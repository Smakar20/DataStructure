/*Tl and T2 are two very large binary trees, with Tl much bigger than T2. Create an algorithm to determine if T2 is a subtree of Tl. 
A tree T2 is a subtree of Tl if there exists a node n in Tl such that the subtree of n is identical to T2. That is, if you cut off the 
tree at node n, the two trees would be identical.*/

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
right1.insertRight(7)

var root2 = new Tree(6)
var left2 = root2.insertLeft(5)
var right2 = root2.insertRight(7)

function isSame(root1,root2){
  if(!root1 && !root2) return true
  if(!root1 || !root2) return false
  return ((root1.val == root2.val) && isSame(root1.left, root2.left) && isSame(root1.right,root2.right))
}


function isSubTree(T1,T2){
  if(isSame(T1,T2)) return true
  var result = false
  if(T1.left) result = result || isSubTree(T1.left, T2)
  if(T1.right) result = result || isSubTree(T1.right, T2)
  return result
}

//------ test --------
isSubTree(root1,root2)

