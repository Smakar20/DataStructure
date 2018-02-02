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

//BFS
function findNodeBfs(root,node){
  if(!root) return
  var nodes = [root]
  for(var n of nodes){
    if(n == node) return true
    if(!n.visited){
      n.visited = true
      n.neighbors.forEach((e)=>{
        nodes.push(e)
      })
    }
  }
  return false
}

//console.log(a)
d = new GraphNode('d')
c.neighbors.add(d)
findNodeBfs(a,d)
