/*Serialize and deserialize a tree.*/
var fs = require('fs')

class Tree{
  constructor(val){
    this.id = this.uniqueId() //uniqueID (generate unique id and assign to each node)
    this.val = val
    this.parent = null
    this.children = []
  }
  
  uniqueId() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
  }
}

var root = new Tree(1)
var left = new Tree(2)
var right = new Tree(3)
left.parent = root
right.parent = root
root.children.push(left)
root.children.push(right)

function writeFile(fileName, content){
	return new Promise((resolve, reject)=>{
		fs.writeFile(fileName, content,(err)=>{
			if(err) reject(err)
			resolve(fileName)
		})
	})
}

function readFile(fileName){
	return new Promise((resolve, reject)=>{
		fs.readFile(fileName, 'utf8', (err, res)=>{
			if(err) reject(err)
			resolve(res)
		})
	})
}

function serialize(root){
	console.log('Serialization started')
	return new Promise((resolve,reject)=>{
		if(!root) resolve()
		var nodes = [root]
		var i = 0,
		pToC = [],
		details = []

		while(i < nodes.length){
			pToC.push({'child': nodes[i].id, 'parent': (nodes[i].parent == null) ? null : nodes[i].parent.id})

			details.push({'id': nodes[i].id, 'detail': nodes[i].val})

			if(nodes[i].children){
				nodes[i].children.forEach((child)=>{
					nodes.push(child)
				})
			}
			i++
		}

		//writting to files
		writeFile('pToCRelation.txt', JSON.stringify(pToC))
		.then(()=>{
			return writeFile('details.txt', JSON.stringify(details))
		})
		.then(()=>{
			resolve('Serialization is done')
		})
		.catch((e)=>{
			reject(e)
		})
	})
}


function deserialize(){
	console.log('Deserialization started')
	return new Promise((resolve, reject)=>{
	var pToC, details
	readFile('pToCRelation.txt')
	.then((res)=>{
		pToC = JSON.parse(res)
		return readFile('details.txt')
	})
	.then((res)=>{
		details = JSON.parse(res)
		var idToNodeMap = new Map()
		var root = null
		//building nodes
		for(var d of details){
			var newNode = new Tree(d.detail)
			newNode.id = d.id
			idToNodeMap.set(d.id, newNode)
		}
		//building relations
		for(var r of pToC){
			var childNode = idToNodeMap.get(r.child)
			var parentNode = idToNodeMap.get(r.parent)
			if(parentNode != undefined){
				parentNode.children.push(childNode)
			}else{
				root = childNode
			}
		}
		resolve(root)
	})
	.catch((e)=>{
		reject(e)
	})
	})
}

//--------------test----------------
serialize(root)
.then((res)=>{
	console.log(res)
	if(res != undefined) return deserialize()
})
.then((res)=>{
	console.log('root: ', res)
	console.log('deserialize is done')
}).catch((e)=>{
	console.log('error: ', e)
})
