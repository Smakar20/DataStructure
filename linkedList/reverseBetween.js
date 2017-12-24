/*Reverse a linked list from position m to n. Do it in-place and in 
one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.*/

class Node{
  constructor(val, next){
    this.val = val
    this.next = next
  }
}

var n1 = new Node(5,null)
var n2 = new Node(4,n1)
var n3 = new Node(3,n2)
var n4 = new Node(2,n3)
var n5 = new Node(1,n4)

function reverseBetween(head, m, n){
  print(head)
  if(!head) return 'head can not be null'
  if(m==1 && n==1){
    return head
  }
  var i = 1,
  current = head,
  tail = null,
  prev = null

  while(i < m){
    tail = current
    current = current.next
    i++
  }
  
  while(i <= n){
    var temp = current.next
    current.next = prev
    prev = current
    current = temp
    i++
  }
  
  if(m == 1){
    tail = prev
    head = tail
  }else{
    tail.next = prev
  }
  
  while(tail.next){
    tail = tail.next
  }
  tail.next = current
  print(head)
  return head
}

function print(head){
  while(head){
    console.log('val is: ', head.val)
    head = head.next
  }
  console.log('val is: ', head)
}

//----------test-----------
reverseBetween(n5,2,4)
