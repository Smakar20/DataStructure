/*Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Note: Do not modify the linked list.

Follow up:
Can you solve it without using extra space?*/

  function ListNode(val) {
      this.val = val;
      this.next = null;
  }

let detectCycle = function(head) {
  let [slow, fast, hasCycle] = [head, head, false];
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (fast === slow) {
			hasCycle = true;
			break;
		};
	}
	if (!hasCycle) return null;
	slow = head;
	while (fast !== slow) {
		fast = fast.next;
		slow = slow.next;
	}
	return fast;
};
