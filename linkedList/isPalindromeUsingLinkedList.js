/*Given a singly linked list, determine if it is a palindrome.
Follow up:
Could you do it in O(n) time and O(1) space?*/

function Node(val, next){
  this.val = val
  this.next = next
}

var n1 = new Node(1,null)
var n2 = new Node(2, n1)
var n3 = new Node(5,n2)
var n4 = new Node(1,n2)

var isPalindromeUsingLinkedList = function(head) {
    if(head == null || head.next == null) return true
    var current = head, prev = null
    while(current != null){
        if(current.next == null){
          if(head.val != current.val) return false
          if(prev!= null) prev.next = null
          head = head.next
          current = head
          prev = null
        }else{
         prev = current
         current = current.next
        }
    }
    return true
}

console.log('1st test: ',isPalindromeUsingLinkedList(n3)) //false
console.log('2nd test: ',isPalindromeUsingLinkedList(n4)) //true
