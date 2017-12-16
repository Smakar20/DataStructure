//find the kth node from end

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

function kthNodeFromLast(head, k){
  if(head == null) return 'head can not be null'
  var fast = head, slow = head
  for(var i = 0; i < k; i++){
    if(fast != null) fast = fast.next
  }
  
  while(fast != null && fast.next != null){
    fast = fast.next
    slow = slow.next
  }
  return slow
}

console.log('kth element from last: ', kthNodeFromLast(n4, 2))
