//Reverse a doubly linked list.

class Node{
  constructor(val, prev, next){
    this.val = val
    this.prev = prev
    this.next = next
  }
}

function print(head){
  while(head){
    console.log('node: ', head.val)
    head = head.next
  }
}

function reverseDoublyLinkedList(head){
  if(!head || !head.next) return head
  var current = head
  while(current){
    var temp = current.next 
        current.next = current.prev
        current.prev = temp
        if(!temp) head = current
        current = temp
  }
return head  
}

// -------- test --------------------
var n1 = new Node(4,null,null)
var n2 = new Node(3,null,n1)
n1.prev = n2
var n3 = new Node(2,null,n2)
n2.prev = n3
var n4 = new Node(1,null,n3)
n3.prev = n4

print(n4)
console.log('--------------------')
print(reverseDoublyLinkedList(n4))

