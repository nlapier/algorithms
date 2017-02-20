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
	const length = this.listLength;

	if (length === 0 || position < 1 || position > length){
		throw Error("Requested node does not exist in this list");
	}

	if (length/position > 2){
		let currentNode = this.head;
		for(let i = 1; i < position; i++){
			currentNode = currentNode.next;
		}
	} else {
		let currentNode = this.tail;
		for(let i = listLength; i > position; i--){
			currentNode = currentNode.previous;
		}
	}

	return currentNode;	
}

DoubleLinkedList.prototype.deleteNodeAt = function(position){
	const nodeToDelete = this.getNodeAt(position),
	length = this.listLength;

	if (length === 1){
		this.head = null;
		this.tail = null;
	} else if (position === 1){
		this.head = nodeToDelete.next;
		this.head.previous = null;
	} else if (position === length){
		this.tail = nodeToDelete.previous;
		this.tail.next = null;
	} else {
		const previousNode = nodeToDelete.previous;
		const nextNode = nodeToDelete.next;
		previousNode.next = nextNode;
		nextNode.previous = previousNode;
	}

	this.listLength--;

	return nodeToDelete;
}