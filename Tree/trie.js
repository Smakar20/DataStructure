/*Construct trie and perform search.*/
class Trie{
  constructor(){
    this.children = new Map()
    this.isWord = false
  }
}

//---build tree -----
function build(words) {
  let root = new Trie();
  words.forEach((word) => insertIntoTrie(root, word));
  return root;
}

function insertIntoTrie(root, word) {
  if (word === '') {
    root.isWord = true;
    return;
  }
  let node = root.children.get(word[0]);
  if (!node) {
    node = new Trie();
    root.children.set(word[0], node);
  }
  insertIntoTrie(node, word.slice(1));
}

// --------- search in trie ----------
function searchWord(root, word) {
  if (word === '' && root.isWord) return true;
  
  if (word[0] == '.') {
    for(let v of root.children.values()){
      if (searchWord(v, word.slice(1))) return true;
    }
    return false;
  }
  
  let node = root.children.get(word[0]);
  if (!!node) {
    return searchWord(node, word.slice(1));
  }

  return false;
}

//--------------longest common---------------------
function longestCommon(root, word) {
  let output = [];
  longestCommonUtil(root, word, output, '');
  return output[0];
}

function longestCommonUtil(root, word, output, current) {
  if (root.isWord) {
    output.pop();
    output.push(current);
  }
  if (word == '') return;
  
  let node = root.children.get(word[0]);
  if (!!node) {
    current += word[0];
    longestCommonUtil(node, word.slice(1), output, current)
  }
}

//----- test -----
let root = build(['are','base','basement','area','ab'])
longestCommon(root, 'baseme') //'base'
//searchWord(root, '...') //true
