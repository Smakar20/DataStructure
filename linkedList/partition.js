/*Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

For example,
Given 1->4->3->2->5->2 and x = 3,
return 1->2->2->4->3->5.*/

var partition = function(head, x) {
    if(!head) return null
    var current = head
    var smaller = null, greater = null
    var first = null, last = null
    
    while(current){
        if(current.val < x){
            if(!smaller){
                smaller = current
                first = smaller
            }else{
                smaller.next = current
                smaller = smaller.next
            }
        }else{
            if(!greater){
                greater = current
                last = greater
            }else{
                greater.next = current
                greater = greater.next
            }
        }
        current = current.next
    }
    
    if(first){
        if(last){
            greater.next = null
            smaller.next = last
        }
        return first
    }
    return last
};
