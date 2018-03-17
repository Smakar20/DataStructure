
  /*Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?*/
  
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
 
var hasCycle = function(head) {
    var fast = head
    var slow = head
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(fast == slow) return true
    }
    return false
};

var head = new ListNode(1)
 head.next = new ListNode(2)

hasCycle(head) //false
