//Queue implementation using linked list
/*Note: Queue can also be implemented using Array's push and shift operations.*/

class Node {
  constructor(data, next){
	  this.data = data
	  this.next = next
  }
}

var head = null
var tail = null
//pushing into the linked list
function enque(val){
  var addNode = new Node(val, null)
  if(tail != null){
    tail.next = addNode
    tail = tail.next
  }else{
    head = addNode
    tail = addNode
  }
}
//poping from the linked list
function deque(){
  if(head == null) return 'Nothing to deque'
  var result = head.data
  head = head.next
  if(head == null) tail = null
  return result
}
//to empty the linked list
function empty(){
  head = null
  tail = null
}

enque(3)
enque(2)
enque(5)
console.log('head: ', head)
deque()
console.log('head: ', head)
empty()
console.log('head: ', head)
