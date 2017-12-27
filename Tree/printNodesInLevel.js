/*Print all the node values in different levels (left to right order) of a binary tree. Each level should be printed in new line.*/

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

function print(root){
  if(!root) return
  var arr = []
  arr.push(root)
  arr.push('--')
  var level = ''
  for(var node of arr){
    if(node == '--' && level != ''){
      console.log(level.trim())
      arr.push('--')
      level = ''
    }else{
      level += node.val + ' '
    }
    if(node.left){
      arr.push(node.left)
    }
    if(node.right){
      arr.push(node.right)
    }
  }
}

// ----- test ------
var root = new Tree(1)
var left = root.insertLeft(2)
var right = root.insertRight(3)
left.insertLeft(4)
left.insertRight(5)
right.insertRight(6)
print(root)
//----output-----
/*
1
2 3
4 5 6
*/
//---------------------
