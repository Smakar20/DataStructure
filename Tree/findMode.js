/*Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
For example:
Given BST [1,null,2,2],
   1
    \
     2
    /
   2
return [2].

Note: If a tree has more than one mode, you can return them in any order.

Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not 
count).*/

var findMode = function(root) {
     if(!root) return []
/*   var temp = []    
     modesBB(root,temp)
     var maxCount = -1
     var count = 1
     var output = []
     for( var i=0; i < temp.length; ++i) {
         if (temp[i] == temp[i+1]) {
             count++    
         }
         else {
             if (count > maxCount) {
                 maxCount = count
                 output=[temp[i]]
             }
             else if ( count == maxCount) {
                 output.push(temp[i])
            }
             count = 1
         }
    }*/

   //without extra space -- start
    var output = []
    modesBBNoSpace(root, output)    
    if (count > maxCount) {
            maxCount = count
            // Clear the array
            output.length = 0
            output.push(pre)
        }
        else if ( count == maxCount) {
            output.push(pre)
        }

    pre = undefined
    count = 1
    maxCount = -1
    //without extra space -- end
    return output
};

function modesBB(root, output) {
  if (!root) return
  modesBB(root.left, output)
  output.push(root.val)
  modesBB(root.right, output)
}

//without extra space
var pre = undefined
var count = 1
var maxCount = -1

function modesBBNoSpace(root, output) {
  if (!root) return
  modesBBNoSpace(root.left, output)   
    if (pre == root.val) {
        count++    
    }
    else if(pre != undefined) {
        if (count > maxCount) {
            maxCount = count
            // Clear the array
            output.length = 0
            output.push(pre)
        }
        else if ( count == maxCount) {
            output.push(pre)
        }
        count = 1
    }
    
  pre = root.val    
  modesBBNoSpace(root.right, output)
}
