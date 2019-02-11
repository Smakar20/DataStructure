/*
Given a Binary Tree (BT), convert it to a Doubly Linked List(DLL). 
 */


function TreeNode(left, value, right) {
  this.left = left;
  this.value = value;
  this.right = right;
}

function ListNode(prev, value, next) {
  this.prev = prev;
  this.value = value;
  this.next = next;
}

function LinkedList(head, tail) {
  if (tail === undefined) tail = head;
  this.head = head;
  this.tail = tail;
}
LinkedList.prototype.addToStart = function(list) {
  this.head.prev = list.tail;
  list.tail.next = this.head;
  this.head = list.head;
}
LinkedList.prototype.addToEnd = function(list) {
  this.tail.next = list.head;
  list.head.prev = this.tail;
  this.tail = list.tail;
};

function bstToDLL(tree) {
  var centerNode = new ListNode(null, tree.value, null);
  var list = new LinkedList(centerNode);
  if (tree.left) list.addToStart(bstToDLL(tree.left));
  if (tree.right) list.addToEnd(bstToDLL(tree.right));
  return list;
}

var tree = new TreeNode(
  new TreeNode(
    new TreeNode(null, 25, null),
    12,
    new TreeNode(null, 30, null)
  ),
  10,
  new TreeNode(new TreeNode(null, 36, null), 15, null)
);
var linkedList = bstToDLL(tree);
for (var node = linkedList.head; node; node = node.next) console.log(node.value);
