//compare linked lists

function Node(val, next)
{
	this.val = val
	this.next = next
}

//function to build a linked list
function linkedList(arr)
{
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
//function to compare linked lists
function isEqual(list1, list2){
  if(list1 == null && list2 == null) return true
  if(list1 == null || list2 == null) return false
  while(list1 != null && list2 != null){
    if(list1.val != list2.val) return false
    list1 = list1.next
    list2 = list2.next
  }
  return list1 == null && list2 == null
}
//test
var list1 = linkedList([1,2,3])
var list2 = linkedList([1,2,3])

console.log('is equal: ',isEqual(list1,list2))
