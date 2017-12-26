/*Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You must do this in-place without altering the nodes' values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}*/

class Node{
  constructor(val, next){
    this.val = val
    this.next = next
  }
}

var n1 = new Node(4, null)
var n2 = new Node(3, n1)
var n3 = new Node(2, n2)
var n4 = new Node(1, n3)

function reorder(head){
  var pointer = head
  while(head && head.next){
    var current = head,
    prev = null
    while(current.next){
    prev = current
    current = current.next
  }
  if(prev) prev.next = null
  
    var temp = head.next
    head.next = current
    head.next.next = temp
    head = head.next.next
  }
   print(pointer)
}

function print(head){
  while(head){
    console.log('node: ', head.val)
    head = head.next
  }
}

//------test--------
reorder(n4)

