Function SingleLinkedList(){
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
		const currentNode = this.head;
		while(currentNode.next){
			currentNode = currentNode.next;
		}
		currentNode.next = node;
	}

	this.listLength++;
	return node;
}

SingleLinkedList.prototype.getNodeAt = function(postition){
	const length = this.listLength;
	let currentNode = this.head;

	if (length === 0 || position < 1 || position > length){
		throw Error("Requested node does not exist in this list");
	}

	for (let i = 1; i <= position; i++){
		currentNode = currentNode.next;
	}

	return currentNode;
} 