function GraphNode(label) {
    this.label = label;
    this.neighbors = new Set();
    this.visited = false
}

var a = new GraphNode("a");
var b = new GraphNode("b");
var c = new GraphNode("c");

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

//DFS
function findNodeDfs(root, node){
  if(!root) return
  if(root == node) return true
  root.visited = true
  for(var n of root.neighbors){
    if(!n.visited){ 
      n.visited = true
      var found = findNodeDfs(n, node)
      if(found) return true
    }
  }
  return false
}


//console.log(a)
d = new GraphNode('d')
//a.neighbors.add(d)
findNodeDfs(a, c)
