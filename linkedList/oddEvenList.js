/*Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node 
number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example:
Given 1->2->3->4->5->NULL,
return 1->3->5->2->4->NULL.

Note:
The relative order inside both the even and odd groups should remain as it was in the input. 
The first node is considered odd, the second node even and so on ...*/

var oddEvenList = function(head) {
    if(!head) return null
    var start = null, last = null
    var odd = null, even = null
    var current = head
    var currentNodeNum = 1
    while(current){
        if(currentNodeNum%2 == 0){
            if(!even){
                even = current
                last = even
            }else{
                even.next = current
                even = even.next
            }
        }else{
            if(!odd){
                odd = current
                start = odd
            }else{
                odd.next = current
                odd = odd.next
            }
        }
        current = current.next
        currentNodeNum++
    }
    if(start){
        if(last){
            even.next = null
            odd.next = last
        }
        return start
    }
    return last
};

