//remove nth node from the last.
function Node(val, next){
  this.val = val
  this.next = next
}
//1->2->3->4->5
var n1 = new Node(5,null)
var n2 = new Node(4,n1)
var n3 = new Node(3,n2)
var n4 = new Node(2,n3)
var n5 = new Node(1,n4)

var removeNthFromEnd = function(head, n) {
    if(head == null) return 'can not find'
    if(head.next == null) return null
    var i = 1,
        fast = head,
        slow = head,
        prev = null
    while(i < n){
       fast = fast.next
       i++
    }
    while(fast.next){
        fast = fast.next
        prev = slow
        slow = slow.next
    }
    if(slow == head) return head.next
    prev.next = slow.next
    return head
};

function print(head){
  while(head){
    console.log('head: ', head.val)
    head = head.next
  }
}

print(removeNthFromEnd(n5, 2)) //1,2,3,5
