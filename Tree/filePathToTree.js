// Write a function that transforms a list of file paths into a tree:


// Input:
const files = [
  'file1.html',
  'dir1/file2.html',
  'dir1/file4.js',
  'dir1/dir3/file6.js',
  'dir1/dir3/fileX.js',
  'dir2/file5.js',
  'file3.html'
];

// Output:
const tree = {
  name: null,
  path: null,
  children: [
    { path: 'file1.html', name: 'file1.html', children: [] },
    {
      path: 'dir1',
      name: 'dir1',
      children: [
        { path: 'dir1/file2.html', name: 'file2.html', children: [] },
        { path: 'dir1/file4.js', name: 'file4.js', children: [] },
        {
          path: 'dir1/dir3',
          name: 'dir3',
          children: [
            { path: 'dir1/dir3/file6.js', name: 'file6.js', children: [] },
            { path: 'dir1/dir3/fileX.js', name: 'fileX.js', children: [] },
          ],
        },
      ],
    },
    {
      path: 'dir2',
      name: 'dir2',
      children: [
        { path: 'dir2/file5.js', name: 'file5.js', children: [] },
      ],
    },
    { path: 'file3.html', name: 'file3.html', children: [] },
  ]
};

//---------------------------------------------------------------------------
class Tree{
    constructor(){
        this.path = null;
        this.name = null;
        this.children = [];
    }
}

function buildTree(files) {
  var tree = new Tree(); 
  files.forEach((file)=>{
      insertIntoTree(tree, file);
  });

  return tree;
}

function insertIntoTree(root, str){
    var path = '';
    if (str.indexOf('/') === -1){
        path = (root.path === null) ? str : root.path + '/' + str;
    }else {
        path = (root.path === null) ? str.substr(0, str.indexOf('/')) : root.path + '/' + str.substr(0, str.indexOf('/'));
    }
    
    var node = new Tree();
    var nodeFound = false;
    for (var ele of root.children){
      
        if (ele.path === path) {
            node = ele;
            nodeFound = true;
        }
    }
    
    if (str.indexOf('/') === -1 && !nodeFound){
        node.path = path;
        node.name = str;
        root.children.push(node);
        return;
    }
    
    if (!nodeFound){
      node.path = path;
    node.name = str.substr(0, str.indexOf('/'));
    root.children.push(node);
    }
    
    insertIntoTree(node, str.substr(str.indexOf('/')+1));
}

buildTree(files);
