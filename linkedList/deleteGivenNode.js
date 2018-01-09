/*Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 
1 -> 2 -> 4 after calling your function.

return {void} Do not return anything, modify node in-place instead.
*/

class Node{
  constructor(val,next){
    this.val = val
    this.next = next
  }
}

var deleteNode = function(node) {
    var current = node,
        prev = null
    while(current.next){
        var value = current.val
        current.val = current.next.val
        current.next.val = value
        prev = current
        current = current.next
    }
    prev.next = null
    //return node
}

//----- test -------
var n3 = new Node(1, null)
var n2 = new Node(2,n3)
var n1 = new Node(1,n2)

deleteNode(n1) // 1 -> 1
