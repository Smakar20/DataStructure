/*Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

For example,
Given 1->2->3->3->4->4->5, return 1->2->5.
Given 1->1->1->2->3, return 2->3.*/

class Node{
  constructor(val, next){
    this.val = val
    this.next = next
  }
}

var deleteDuplicates = function(head) {
    if(!head || !head.next) return head
    var current = head,
        prev = null,
        dupsFound = false
    while(current.next){
        if(current.val == current.next.val){
            dupsFound = true
            current = current.next
        }else{
            if(dupsFound){
                if(!prev){
                  head = current.next
                }else{
                  prev.next = current.next
                }
                current = current.next
                dupsFound = false
                continue
            }else{
              prev = current
              current = current.next
            }
        }
    }
    if(dupsFound){
      if(!prev){
        head = current.next
      }else{
        prev.next = null
      }
    }
    return head
}

//-----test---------
var n7 = new Node(5,null)
var n6 = new Node(4,n7)
var n5 = new Node(4,n6)
var n4 = new Node(3,n5)
var n3 = new Node(3,n4)
var n2 = new Node(2,n3)
var n1 = new Node(1,n2)

deleteDuplicates(n1) //1->2->5
