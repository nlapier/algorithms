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
	let parent, childSide, currentNode;

	if (!this.root){
		this.root = node;
	} else {
	 	currentNode = this.root;
		while (currentNode){
			parent = currentNode;
			if (value >= currentNode.value){
				currentNode = currentNode.rightChild;
				childSide= "rightChild";
			} else {
				currentNode = currentNode.leftChild;
				childSide = "leftChild";
			}
		} 
		parent[childSide] = node;
	}

	return node;
};

//GET THIS WORKING
BinaryTree.prototype.findWithParent = function(value){
	const output = {
		parent: null,
		currentNode: this.root
	}
	
	while (output.currentNode != null){
		output.parent = currentNode;
		if (value >= currentNode.value){
			output.currentNode = currentNode.rightChild;
		} else if (value < currentNode.value){
			output.currentNode = currentNode.leftChild;
		} else {
			break;
		}
	}

	return output;
}

BinaryTree.prototype.remove = function(value){
	let currentNode = this.root,
	grandParent, parent, childSide;
	while (currentNode.value != value){
		grandParent = parent;
		parent = currentNode;
		if (value > currentNode.value){
			currentNode = currentNode.rightChild;
			childSide = "rightChild";
		} else {
			currentNode = currentNode.leftChild;
			childSide = "leftChild";
		}
	}

	if (!currentNode.rightChild){
		parent[childSide] = currentNode.leftChild;
	} else {
		if (!currentNode.rightChild.leftChild){//If the current node has a right (greater) child, which in turn has only a right (greater) child
			currentNode.rightChild.leftChild = currentNode.leftChild;
			if (currentNode.rightChild > grandParent.value){
				grandParent.rightChild = currentNode.rightChild;
			} else {
				grandParent.leftChild = currentNode.rightChild;
			}
		} else {

		}
	}
}



/*Test area
const test = new BinaryTree();

test.add(10);
test.add(8);
test.add(11);
test.add(12)
test.add(9);
console.log(test)
*/