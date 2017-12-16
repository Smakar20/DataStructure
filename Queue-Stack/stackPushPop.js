//Stack implementation using linked list
/*Note: Stack can also be implemented using Array's push and pop functions.*/

class Node {
  constructor(data, next){
	  this.data = data
	  this.next = next
  }
}

var head = null

//pushing into the linked list
function push(val){
  head = new Node(val, head)
}
//poping from the linked list
function pop(){
  if(head == null) return 'Nothing to pop'
  var result = head.data
  head = head.next
  return result
}
//to empty the linked list
function empty(){
  head = null
}

push(3)
push(2)
push(5)
console.log('head: ', head)
console.log('poped value: ',pop())
console.log('head: ', head)
empty()
console.log('head: ', head)
