//merge two sorted lonked lists.

class Node{
  constructor(data, next){
    this.data = data
    this.next = next
  }
}

var n1 = new Node(4, null),
n2 = new Node(2, n1),
n3 = new Node(1, n2)
var head1 = n3
var n4 = new Node(5, null),
n5 = new Node(4, n4),
n6 = new Node(3, n5),
head2 = n6

function merge(head1, head2){
  if(head1 == null && head2 == null) return 'can not merge anything'
  if(head1 == null || head2 == null) return (head1 == null) ? head2 : head1
  
  while(head1 != null){
    if(head1.data <= head2.data){
      head2 = new Node(head1.data, head2)
    }
    else{
      var current = head2
      while(current.next != null && current.next.data < head1.data) current = current.next
      current.next = new Node(head1.data, current.next)
    }
    head1 = head1.next
  }
  print(head2)
  return head2
}

function print(head){
  while(head != null){
    console.log('head: ', head.data)
    head = head.next
  }
}

//---------test-------------
merge(head1, head2)
