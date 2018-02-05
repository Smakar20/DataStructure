/*Construct trie and perform search.*/
class Trie{
  constructor(){
    this.children = new Map()
    this.isWord = false
  }
}

//---build tree -----
function build(arrWords){
  var root = new Trie()
  arrWords.forEach((word)=>{
    insertIntoTrie(root,word)
  })
  return root
}

function insertIntoTrie(root, word){
  if(word == ''){
    root.isWord = true
    return
  }
  var node = root.children.get(word[0])
  if(node == undefined){
    node = new Trie()
    root.children.set(word[0], node)
  }
  insertIntoTrie(node, word.slice(1))
}

// --------- search in trie ----------
function searchWord(root, word){
  if(word == '' && root.isWord) return true
  
  if(word[0] == '.'){
    for(v of root.children.values()){
      if (searchWord(v, word.slice(1))) return true
    }
    return false
  }
  
  var node = root.children.get(word[0])
  if(node){
    return searchWord(node,word.slice(1))
  }

  return false
}

//--------------longest common---------------------
function longestCommon(root,word){
  var output = []
  longestCommonUtil(root,word,output,[])
  return output
}

function longestCommonUtil(root, word, output, current){
  if(root.isWord){
    output.pop()
    output.push(current.slice())
  }
  if(word == '') return
  
  var node = root.children.get(word[0])
  if(node){
    current.push(word[0])
    longestCommonUtil(node,word.slice(1), output, current)
    current.pop()
  }
}

//----- test -----
var root = build(['are','base','basement','area','ab'])
longestCommon(root, 'baseme') //'base'
//searchWord(root, '...') //true
