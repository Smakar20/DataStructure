/*Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.*/

class Node{
  constructor(val, next){
    this.val = val
    this.next = next
  }
}

var n1 = new Node(2, null)
var n2 = new Node(1, n1)
var n3 = new Node(1, n2)

var deleteDuplicates = function(head) {
   var current = head
   while(current && current.next){
      if(current.val == current.next.val){
        current.next = current.next.next
        deleteDuplicates(current)
      }
      current = current.next
   }
    return head
}

deleteDuplicates(n3)
