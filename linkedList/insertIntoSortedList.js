//insert into sorted linked list

class Node {
  constructor(data, next){
    this.data = data
    this.next = next
  }
}

n1 = new Node(5, null)
n2 = new Node(2, n1)
n3 = new Node(1, n2)

function insertIntoSortedList(head, val){
  if(head == null || val <= head.data){
    head = new Node(val, head)
    return head
  }
  
  var current = head
  while(current.next && current.next.data < val) current = current.next
  
  current.next = new Node(val, current.next)
  return current
}

console.log('sorted: ', insertIntoSortedList(n3, 4))
