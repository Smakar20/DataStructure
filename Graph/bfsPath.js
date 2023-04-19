/*
Write a function that implements the breadth-first search (BFS) algorithm on a directed graph (in adjacency list format), given a starting node.

BFS is an algorithm used for traversing a graph or a tree, starting from the root node and exploring all the neighbors at the current depth before moving on to nodes at the next depth level. The output from BFS is an array of the graph's nodes in the order they were traversed.

Examples
const graph1 = {
  A: ['B', 'C', 'D'],
  B: ['E', 'F'],
  C: ['G', 'H'],
  D: ['I', 'J'],
  E: ['D'],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
};

breadthFirstSearch(graph1, 'A'); // ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

        A
      / | \
     B  C  D
   / |   |   | \
  E  F   G   H  I
         |
         J

breadthFirstSearch(graph1, 'B'); // ['B', 'E', 'F', 'D', 'I', 'J']

    B
   / \
  E   F
  |
  D
 / \
I   J


const graph2 = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F', 'G'],
  'D': [],
  'E': [],
  'F': [],
  'G': [],
};

breadthFirstSearch(graph2, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']

       A
     /   \
    B     C
  /  \   /   \
 D   E  F    G

breadthFirstSearch(graph2, 'E')); // ['E']
A Queue data structure is also provided for you at the bottom of the skeleton code.
*/



/**
 * @param {Record<string, Array<string>} graph The adjacency list representing the graph.
 * @param {string} source The source node to start traversal from. Has to be a valid node if graph is non-empty.
 * @return {Array<string>} A BFS-traversed order of nodes.
 */
 
export default function breadthFirstSearch(graph, source) {
  if (Object.keys(graph).length === 0) return [];
  const queue = new Queue();
  const visitedNodes = new Set();

  queue.enqueue(source);
  // ------iterative approach-----------
  while(!queue.isEmpty()) {
    const curNode = queue.dequeue();
    visitedNodes.add(curNode);
    graph[curNode].forEach(child => {
      if (visitedNodes.has(child)) return;
      queue.enqueue(child);
    });
  }
  return Array.from(visitedNodes);

  // ---- recursive approach ------
  // return bfsUtil(graph, queue, visitedNodes);
}

function bfsUtil(graph, queue, visited) {
  if (queue.isEmpty()) return Array.from(visited);
  const curNode = queue.dequeue();
  visited.add(curNode);
  graph[curNode].forEach(child => {
    if (visited.has(child)) return;
    queue.enqueue(child);
  });
  return bfsUtil(graph, queue, visited);
}

/*  Auxiliary classes */

/**
 * A Queue class with O(1) enqueue and dequeue is provided for you.
 * You can use it directly should you wish to.
 *
 * Example usage:
 * const q = new Queue();
 * q.enqueue('a');
 * q.enqueue('b');
 * q.dequeue(); //'a'
 * q.isEmpty(); // False
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(item) {
    const newNode = new Node(item);
    if (this.isEmpty()) {
      this.head = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    if (this.isEmpty() || !this.head) {
      return null;
    } else {
      const removedNode = this.head;
      this.head = this.head.next;
      removedNode.next = null;
      this.length--;
      if (this.isEmpty()) {
        this.tail = null;
      }
      return removedNode.value;
    }
  }
}

/* 
Time complexity:
In the worst case, BFS visits every vertex and every edge of the graph once. Therefore, the time complexity of BFS is O(V + E), where V is the number 
of vertices in the graph and E is the number of edges. This is because BFS has to explore all vertices and edges to ensure that it covers the entire 
graph.
*/

/*
Space complexity:
BFS uses a queue to keep track of the nodes to be visited. At any given time, the queue contains the nodes that are at the current level of the graph being 
explored. Therefore, the space complexity of BFS is O(maximum number of nodes in any level of the graph).
*/

