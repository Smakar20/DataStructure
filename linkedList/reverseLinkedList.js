function Node(val, next)
{
	this.val = val;
	this.next = next;
}

//function to build a linked list
function linkedList(arr)
{
	for(var i=0;i<arr.length;i++)
	{
		var current = new Node(arr[i],null);
		if(i === 0)
		{
			var head = current;
		}
		else
		{
			previous.next = current;
		}
		var previous = current;
	}
	return head;
}

//function to reverse a linked list
function reversedLinked(head)
{
	if(head === null)
	{
		return head;
	}
	var current = head;
	var previous = null;
	var advance = head.next;
	while(current !== null)
	{
		current.next = previous;
		previous = current;
		current = advance;
		if(advance !== null)
		{
			advance = advance.next;
		}
	}
	return previous;
}
//altername method - start
function reversedLinked(head){
  if(head == null) return 'head can not be null'
  var prev = null
  var current = head
  while(current != null){
    var temp = current.next
    current.next = prev
    prev = current
    current = temp
  }
  return prev
}
//altername method - end

//function to print linked list node values
function print(head)
{
	var current = head;
	while(current !== null)
	{
		console.log(current.val);
		current = current.next;
	}
}


var temp = linkedList([1,2,3,4,5]); // creating a linked list

print(temp); //Printing linked list values only

console.log(reversedLinked(temp)); // reverseing the linked list
