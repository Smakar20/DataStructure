// Build Order
//
// You are given a list of projects and a list of dependencies 
// (which is a list of pairs of projects, where the 1st project is
// dependent on the 2nd project. All of a project's dependencies
// must be built before the project is. Find a build order that will allow
// the projects to be built.
// If there is no valid build order, return an error
// Example :
// 		INPUT
//			projects : a, b, c, d, e, f
// 			dependencies : (d,a), (b,f), (d,b), (a,f), (c,d)
//		OUTPUT : f, e, a b, d, c

  var a = 'a'
  var b = 'b'
  var c = 'c'
  var d = 'd'
  var e = 'e'
  var f = 'f'
  var g = 'g'
  var projects = [a, b, c, d, e, f];
  var dependencies = [[d,a], [b,f], [d,b], [a,f], [c,d]];


class Graph{
    constructor(){
        this.projects = '';
        this.adjList = new Map();
        this.printed = new Set();
    }
    
    buildGraph(input, dependencies){
        for (var inp of input){
            this.addVertex(inp);
        }
        
        for (var dep of dependencies){   
            this.addEdges(dep[0], dep[1]);
        }

        var roots = [];
        for (var k of this.adjList.keys()){
          if (this.adjList.get(k).length === 0) roots.push(k);
        }

        for (var root of roots){
          this.print(root);
        }

        for(var k of this.adjList.keys()){
          this.dfs(k);
        }
    }
    
    addVertex(v){    
        this.adjList.set(v, []);
    }
    
    addEdges(v, e){
        this.adjList.get(v).push(e);
    }

    dfs(root){
      for (var dep of this.adjList.get(root)){
        this.dfs(dep);
      }
      this.print(root);
    }
    
    print(root){
        if(this.printed.has(root)) return;
        this.projects += ' ' + root;
        this.printed.add(root);
    }
}

var graph = new Graph();
graph.buildGraph(projects, dependencies);
console.log('list: ', graph.adjList);
console.log('output: ', graph.projects);
//OUTPUT : f, e, a b, d, c


