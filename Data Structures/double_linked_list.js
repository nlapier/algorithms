function Node(value){
	this.data = value;
	this.next = null;
	this.previous = null;
};

function DoubleLinkedList(){
	this.listLength = 0;
	this.head = null;
	this.tail = null;
}

DoubleLinkedList.prototype.add = function(value){
	const node = new Node(value);

	if (this.listLength){
		this.tail.next = node;
		node.previous = this.tail;
		this.tail = node;
	} else {
		this.head = node;
		this.tail = node;
	}
	this.listLength++;

	return node;
}

DoubleLinkedList.prototype.getNodeAt = function(position){
	
}