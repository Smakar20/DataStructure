/**
 * Definition for singly-linked list.*/
 
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }

/**
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their 
nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
 */
var addTwoNumbers = function(l1, l2) {
    if (!l1 && !l2) return null;
    var arr1 = buildArr(l1);
    var arr2 = buildArr(l2);
    if(arr1.length != arr2.length) padding(arr1, arr2);
    
    var carry = 0;
    var sum = 0;
    var curr = null;
    var output = null;
    var i = 0;
    while (i < arr1.length || carry > 0){
        sum += carry;
        if (i !== arr1.length) sum += arr1[i] + arr2[i];
        carry = 0;
        if (sum > 9){
            carry = Math.floor(sum/10);
            sum = sum%10;
        }

        curr = new ListNode(sum)
        sum = 0;
        if(output){
            curr.next = output;  
        }
        output = curr;
        i++;
    }
    return output;
};

function buildArr(l){
    if(!l) return [];
    var arr = [];
    while(l){
        arr.unshift(l.val);
        l = l.next;
    }
    return arr;
}

function padding(arr1,arr2){
    var diff = Math.abs(arr1.length - arr2.length);
    var modArr = (arr1.length > arr2.length) ? arr2 : arr1;
    for (var i = 0; i < diff; i++){
        modArr.push(0);
    }
}

var l1 = new ListNode(5);
var l2 = new ListNode(5);
addTwoNumbers(l1,l2); // 1 -> 0

