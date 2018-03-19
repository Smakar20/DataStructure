/*Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Note: Do not modify the linked list.

Follow up:
Can you solve it without using extra space?*/

  function ListNode(val) {
      this.val = val;
      this.next = null;
  }

var detectCycle = function(head) {
    var fast = head
    var slow = head
    var isCycle = false
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(fast == slow){
            isCycle = true
            break
        }
    }
    
    if(!isCycle) return null
    var slow = head
    while(fast){
        if(fast == slow) return slow
        fast = fast.next
        slow = slow.next
    }
    return null
};

