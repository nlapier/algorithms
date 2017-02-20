function BinaryTree(){
	this.root = null;
}

function Node(value){
	this.value = value;
	this.leftChild = null;
	this.rightChild = null;
}

BinaryTree.prototype.add = function(value){
	const node = new Node(value);
	let parent = null,
	childSide = null.
	currentNode = this.root;

	if (!this.root){
		this.root = node;
	} else {
		while (currentNode){
			parent = currentNode;
			if (value > currentNode.value){
				currentNode = currentNode.rightChild;
				childSide= "rightChild";
			} else {
				currentNode = currentNode.leftChild;
				childSide = "leftChild"
			}
		} 
		parent[childSide] = node;
	}

	return node;
}