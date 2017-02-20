function SingleLinkedList(){
	this.head = null,
	this.listLength = 0
}

function Node(data){
	this.data = data,
	this.next = null
}


SingleLinkedList.prototype.add = function(value){
	const node = new Node(value);

	if(!this.head){
		this.head = node;
	} else{
		let currentNode = this.head;
		while(currentNode.next){
			currentNode = currentNode.next;
		}
		currentNode.next = node;
	}

	this.listLength++;

	return node;
};

SingleLinkedList.prototype.getNodeAt = function(position){
	const length = this.listLength;
	let currentNode = this.head;

	if (length === 0 || position < 1 || position > length){
		throw Error("Requested node does not exist in this list");
	}

	for (let i = 1; i < position; i++){
		currentNode = currentNode.next;
	}

	return currentNode;
} ;

SingleLinkedList.prototype.deleteNodeAt = function(position){
	const length = this.listLength;
	let currentNode = this.head,
	deletedNode = null,
	previousNode = null;

	if (position < 1 || position > length){
		throw Error("Requested node does not exist in this list");
	}

	if (position === 1){
		this.head = currentNode.next;
		deletedNode = currentNode;
		currentNode = null;
		this.listLength--;
		return deletedNode;
	}

	for (let i = 1; i < position; i++){
		previousNode = currentNode;
		currentNode = currentNode.next;
	}

	previousNode.next = currentNode.next;
	deletedNode = currentNode;
	currentNode = null;
	this.listLength--;

	return deletedNode;
};

