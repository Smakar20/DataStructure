/*Given a Binary Search Tree with integers at every node and an integer k, write code that decides whether or not there exists two nodes a 
and b such that a+b=k. 
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

var root1 = new Tree(4)
var left1 = root1.insertLeft(20)
var right1 = root1.insertRight(6)
left1.insertLeft(1)
left1.insertRight(3)
right1.insertLeft(5)
right1.insertRight(7)


function buildArr(root, arr){
  if(!root) return
  buildArr(root.left,arr)
  arr.push(root.val)
  buildArr(root.right,arr)
  return arr
}

function checkSum(root, k){
  var arr = buildArr(root, [])
  var obj = {}
  for(var i = 0; i < arr.length; i++){
    if(obj[arr[i]] != undefined) return true
    obj[k - arr[i]] = arr[i]
  }
  
  return false
}

//checkSum(root1, 2) //false
checkSum(root1, 4) //true
