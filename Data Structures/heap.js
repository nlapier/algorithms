function Heap(maxOrMin){
	this.root = null;
	this.maxOrMin = maxOrMin;
}

function Node(value){
	this.value = value;
	this.leftChild = null;
	this.rightChild = null;
}

Heap.prototype.findOpenNode = function(node){
	let currentNode = node ? node : this.root;

	// if (currentNode.leftChild === null){
	// 	currentNode = currentNode.leftChild;
	// } else if (currentNode.rightChild === null){
	// 	currentNode = currentNode.rightChild;
	// } else {
		
	// }

	// return currentNode;
}