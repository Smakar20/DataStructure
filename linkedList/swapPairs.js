/*Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.*/
class Node{
  constructor(val, next){
    this.val = val
    this.next = next
  }
}
var n4 = new Node(4, null)
var n3 = new Node(3,n4)
var n2 = new Node(2,n3)
var n1 = new Node(1,n2)

var swapPairs = function(head) {
   if(!head || !head.next) return head
   var prev = head,
       current = head.next
   
   while(current){
       var storeVal = current.val
       current.val = prev.val
       prev.val = storeVal
       prev = current.next
       if(!prev) break
       current = prev.next
   }
    return head
}

function print(head){
  while(head){
    console.log('node: ', head.val)
    head = head.next
  }
}
//-------test--------
print(swapPairs(n1)) // 2 -> 1 -> 4 -> 3
