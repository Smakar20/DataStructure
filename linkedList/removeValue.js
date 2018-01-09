//remove value from a linked list

class Node {
  constructor(data, next){
    this.data = data
    this.next = next
  }
}

n1 = new Node(5, null)
n2 = new Node(2, n1)
n3 = new Node(3, n2)
n4 = new Node(4, n3)

function removeValue(head, val){
  if(head == null) return 'head can not be null'
  if(head != null && head.data == val){
    head = head.next
  }
  var current = head
  while(current != null && current.next != null){
    if(current.next.data == val){
      current.next = current.next.next
      break
    }
    current = current.next
  }
  return head
}

console.log('linked list after removing value: ', removeValue(n4, 5))
