/*
Write a function that implements the depth-first search algorithm on a directed graph (in adjacency list format), given a starting node.

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
depthFirstSearch(graph1, 'A'); // ['A', 'B', 'E', 'D', 'I', 'J', 'F', 'C', 'G', 'H']
depthFirstSearch(graph1, 'B'); // ['B', 'E', 'D', 'I', 'J', 'F']

const graph2 = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F', 'G'],
  'D': [],
  'E': [],
  'F': [],
  'G': [],
};
depthFirstSearch(graph2, 'A')); // ['A', 'B', 'D', 'E', 'C', 'F', 'G']
depthFirstSearch(graph2, 'E')); // ['E']
*/

/**
 * @param {Record<string, Array<string>} graph The adjacency list representing the graph.
 * @param {string} source The source node to start traversal from. It has to exist as a node in the graph.
 * @return {Array<string>} A DFS-traversed order of nodes.
 */
export default function depthFirstSearch(graph, source) {
  if (Object.keys(graph).length === 0) return [];
  const store = [source];
  const visited = new Set();
  // ------ iterative approach -----
  // while (store.length > 0) {
  //   const node = store.pop();
  //   visited.add(node);
  //   const neighbors = graph[node];
  //   for (let i = neighbors.length - 1; i >= 0; i--) {
  //     const neighbor = neighbors[i];
  //     if (!visited.has(neighbor)) store.push(neighbor);
  //   }
  // }
  // --- recursive approach ---
  depthFirstSearchUtil(graph, source, visited);
  return Array.from(visited);
}

function depthFirstSearchUtil(graph, neighbor, visited) {
  if (visited.has(neighbor)) return;
  visited.add(neighbor);
  graph[neighbor].forEach(node => {
    return depthFirstSearchUtil(graph, node, visited);
  });
}
