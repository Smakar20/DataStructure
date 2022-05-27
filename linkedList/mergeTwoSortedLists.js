//merge two sorted lonked lists.

class Node{
  constructor(data, next){
    this.data = data
    this.next = next
  }
}

//iterative
// Time: O(n + m) | Space: O(1)
var mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) return null;
    if (!list1) return list2;
    if(!list2) return list1;
    let output, current, node;
    while(list1 && list2) {
        if (list1.val < list2.val) {
            node = new ListNode(list1.val);
            list1 = list1.next;
        }  else {
            node = new ListNode(list2.val);
            list2 = list2.next;
        }

        if (!output) {
            current = node;
            output = current;
        } else {
            current.next = node;
            current = current.next;
        }
    }
    
    if (list1) {
        current.next = list1;
    }
    if (list2) {
        current.next = list2;
    }
    return output;
};

//recursive
// Time: O(n + m) | Space: O(n + m)
var mergeTwoLists = function(l1, l2) {
    if (l1 == null) {
        return l2;
    }
    else if (l2 == null) {
        return l1;
    }
    else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }

}
