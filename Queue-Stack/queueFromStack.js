//Implement Queue from Stack
class Node {
  constructor(data, next){
	  this.data = data
	  this.next = next
  }
}
//Stack's push, pop
class Stack{
  constructor(){
    this.head = null
  }

  push(val){
    this.head = new Node(val, this.head)
  }
  //poping from the linked list
  pop(){
    if(this.head == null) return 'Nothing to pop'
    var result = this.head.data
    this.head = this.head.next
    return result
  }
  //check if the linked list is empty
  isEmpty(){
    return (this.head == null) ? true : false
  }
}

//class to implement Queue from Stack
class QueueFromStack{
  constructor(){
    this.stack = new Stack()
    this.queue = new Stack()
  }
  
  push(val){
    this.stack.push(val)
  }
  
  pop(){
    this.transfer()
    return this.queue.pop()
  }
  
  transfer(){
    if(this.queue.isEmpty()){
      while(this.stack.isEmpty() == false){
        this.queue.push(this.stack.pop())
      }
    }
  }
}

//test
var queueFromStack = new QueueFromStack()
 queueFromStack.push(3)
 queueFromStack.push(2)
 queueFromStack.push(5)
 console.log('list: ', queueFromStack.stack)
console.log('1st poped value: ',queueFromStack.pop())
queueFromStack.push(4)
queueFromStack.push(3)
console.log('2nd poped value: ',queueFromStack.pop())
