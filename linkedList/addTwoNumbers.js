/*You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of 
their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

 function ListNode(val,next) {
      this.val = val;
      this.next = next;
  }

var addTwoNumbers = function(l1, l2) {
    if(l1 == null && l2 == null) return 'can not add'
    if(l1 == null || l2 == null) return (l1 == null) ? l2 : l1
    var newList = null,
        tail = null,
        carry = 0
    while(l1 != null || l2 != null || carry != 0){
        var l1sum = 0, l2sum = 0
         if(l1 == null){
             l1sum = 0
         }else{
             l1sum = l1.val
             l1 = l1.next
         }
        
        if(l2 == null){
             l2sum = 0
         }else{
             l2sum = l2.val
             l2 = l2.next
         }
        var sum = l1sum + l2sum + carry
        if(sum >= 10){
            var temp = sum
            sum = Number(String(sum).slice(String(sum).length - 1))
            carry = Number(String(temp).slice(0,String(temp).length - 1))
        }else{
          carry = 0
        }
        if(newList == null){
            tail = new ListNode(sum, null)
            newList = tail
        }else{
           tail.next =  new ListNode(sum, null)
            tail = tail.next
        }
    }
    return newList
};
//------- test -------------
var n1 = new ListNode(2,null)
var n2 = new ListNode(4,n1)
var n3 = new ListNode(3,n2)

var n4 = new ListNode(5,null)
var n5 = new ListNode(6,n4)
var n6 = new ListNode(4,n5)

var n7 = new ListNode(5, null)
var n8 = new ListNode(5, null)
console.log('1st test: ',addTwoNumbers(n3, n6)) // 7 -> 0 -> 8

console.log('2nd test: ',addTwoNumbers(n7, n8)) // 0 -> 1

