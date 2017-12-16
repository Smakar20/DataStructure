//merge 2 linked lists

function Node(val, next)
{
	this.val = val
	this.next = next
}

//function to build a linked list
function linkedList(arr)
{
  if(arr == undefined) return null
	for(var i=0;i<arr.length;i++)
	{
		var current = new Node(arr[i],null)
		if(i === 0)
		{
			var head = current
		}
		else
		{
			previous.next = current
		}
		var previous = current
	}
	return head
}
//function to merge linked lists
function merge(list1, list2){
  if(list1 == null && list2 == null) return 'can not merge'
  if(list1 == null || list2 == null) return (list1 == null) ? list2 : list1
  var head = list1
  while(list1.next != null){
    list1 = list1.next
  }
  list1.next = list2
  return head
}
//test
var list1 = linkedList([1,3])
var list2 = linkedList([5,2])

console.log('merged list: ',merge(list1,list2))
