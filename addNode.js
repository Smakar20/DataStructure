class Node {
  constructor(data, next){
    this.data = data
    this.next = next
  }
}

var n1 = new Node(1,null)
var n2 = new Node(2,n1)
var n3 = new Node(3,n2)
var n4 = new Node(4,n3)
  
/* Given a reference (pointer to pointer) to the head of a list and a data,  inserts a new node on the front of the list. */  
function push(head, val){
  if(head == null) return 'head can not be null'
  
  var newNode = new Node(val, null)
  newNode.next = head
  head = newNode
  console.log('head: ', head)
}

push(n4, 5)

console.log('-----------------------------------------------')
/*Given a reference (pointer to pointer) to the head of a list and a data, appends a new node at the end*/

function append(head, val){
  if(head == null) return 'head can not be null'
  
  var newNode = new Node(val, null),
  current = head
  while(current.next != null){
    current = current.next
  }
  current.next = newNode
  console.log('current: ', current)
}

append(n4, 5)

console.log('-----------------------------------------------')   
   
   
