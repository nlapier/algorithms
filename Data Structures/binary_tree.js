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
			if (value > currentNode.value){
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
		parent[childSide] = currentNode.rightChild;
	} else {
		if (!currentNode.rightChild.leftChild){//If the current node has a right (greater) child, which has only a right (greater) child
			
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