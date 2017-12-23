/*Given a singly linked list, determine if it is a palindrome.
Follow up:
Could you do it in O(n) time and O(1) space?*/
//check of the given linked list is a palindrome.
function Node(val, next){
  this.val = val
  this.next = next
}
//1->2->3->4->5
var n1 = new Node(5,null)
var n2 = new Node(4,n1)
var n3 = new Node(3,n2)
var n4 = new Node(4,n3)
var n5 = new Node(5,n4)

function isPalindrome(head){
  if(head == null) return 'head can not be null'
  if(head.next == null) return true
  var fast = head, slow = head, prev = null
  while(fast.next != null && fast.next.next != null){
    fast = fast.next.next
    slow = slow.next
  }
  var current = slow.next
  while(current){
    temp = current.next
    current.next = prev
    prev = current
    current = temp
  }
  slow.next = prev
  slow = slow.next
  current = head
  while(slow){
    if(current.val != slow.val) return false
    current = current.next
    slow = slow.next
  }
  return true
}

//test:
console.log('head as null: ', isPalindrome(null)) // 'head can not be null'
console.log('n1 node as head: ', isPalindrome(n1)) // true
console.log('n5 node as head: ', isPalindrome(n5)) // true
console.log('n5 node as head: ', isPalindrome(n4)) // false

//--------------- another method -------------------
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
