/*Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

You may not alter the values in the nodes, only nodes itself may be changed.

Only constant memory is allowed.

For example,
Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5*/

class Node{
  constructor(val,next){
    this.val = val
    this.next = next
  }
}

function reverseKGroup(head, k){
  var current = head,
  prev = null,
  last = null,
  pointer = null,
  n = 1
  while(current && n <= k){
    var temp = current.next
    current.next = prev
    prev = current
    current = temp
    
    if(n == k){
      if(!last){
        last = prev
        pointer = last
      }else{
        pointer.next = prev
      }
      while(pointer.next){
        pointer = pointer.next
      }
      prev = null
      pointer.next = current
      n = 1
      continue
    }
    n++
  }
  var ptLast = null
  ptCurr = prev
  while(ptCurr){
    var temp = ptCurr.next
    ptCurr.next = ptLast
    ptLast = ptCurr
    ptCurr = temp
  }
  if(!pointer){
      last = ptLast
  }else{
      pointer.next = ptLast
  }
  return last
}


function print(head){
  while(head){
    console.log('node: ', head.val)
    head = head.next
  }
}

var n5 = new Node(5,null)
var n4 = new Node(4,n5)
var n3 = new Node(3,n4)
var n2 = new Node(2,n3)
var n1 = new Node(1,n2)

//test
print(reverseKGroup(n1,3))
