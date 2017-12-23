# DataStructure

## Linked list:
A linked list is a data structure which consists of a group of nodes where each node may point to some other node to form a sequence.
1. a "data" field which will store our data (string, number, etc.)
2. a "next" field which will be a reference to some other node

## Linked list vs Array:
- Arrays have better cache locality that can make them better in terms of performance.
- It is easy to insert and delete elements in Linked List.
- Random access is not allowed in a typical implementation of Linked Lists.
- Extra memory space for a pointer is required with each element of the Linked list.
- The size of array has to be pre-decided, linked lists can change their size any time.

## Trees:
A binary tree is composed of tree nodes. Tree nodes consist of a data member variable and the address of 2 other nodes (called as children and are distinguished as left and right.)

- Note: A binary search tree is balanced when for every node, the depth of the sub-trees from the left child and right child differ by at most 1.
Insertion in a binary search tree is logarithmic time operation. An insertion requires search to identify which node in a tree will become the parent of the inserted node. After a parent node is identified by the find operation, only a constant number of operations are required to do the insertion.

Algorithms on linked list are iterative whereas operations on trees are often recursive.
