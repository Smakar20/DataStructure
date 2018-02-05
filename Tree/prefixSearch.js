/*Given a prefix, output list of all the words having the prefix.*/

//------ Trie class ------------
class Trie{
  constructor(){
    this.children = new Map()
    this.isWord = false
    this.word = ''
  }
}

//------------- build the tree ---------------
function build(arrWords){
  var root = new Trie()
  arrWords.forEach((word)=>{
    insertIntoTrie(root,word,word)
  })
  return root
}

function insertIntoTrie(root, word, toInsWrd){
  if(word == ''){
    root.isWord = true
    root.word = toInsWrd
    return
  }
  var node = root.children.get(word[0])
  if(node == undefined){
    node = new Trie()
    root.children.set(word[0], node)
  }
  insertIntoTrie(node, word.slice(1),toInsWrd)
}

//----------------- prefix search -------------
function prefixSearch(root,word){
  var output = []
  prefixSearchUtil(root,word,output)
  return output
}

function prefixSearchUtil(root,word,output){
  if(word == '') findWords(root, output)
  var node = root.children.get(word[0])
  if(node) prefixSearchUtil(node,word.slice(1), output)
}

function findWords(root, output){
  if(root.isWord) output.push(root.word)
  for(v of root.children.values()){
    findWords(v, output)
  }
}

//----- test -----
var root = build(['a','are','base','basement','area'])
prefixSearch(root, 'base')


