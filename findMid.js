/*Find the middle element of a linked list.*/

class Node {
  constructor(data, next){
    this.data = data
    this.next = next
  }
}

function findMid(){
  var n1 = new Node(1,null)
  var n2 = new Node(2,n1)
  var n3 = new Node(3,n2)
  var n4 = new Node(4,n3)
  var head = n4
  var fast = head
  var slow = head
  
  while(fast.next!= null && fast.next.next != null){
    fast = fast.next.next
    slow = slow.next
  }
  return slow.data
}

findMid()
