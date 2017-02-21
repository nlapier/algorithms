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
				childSide = "rightChild";
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
	const nodeObj = this.findWithParent(value),
	currentNode = nodeObj.returnCurrentNode(),
	parent = nodeObj.parent,
	side = nodeObj.childSide;
	let smallestGrandchild;

	if (!currentNode.rightChild){//If the current node has no right child
		parent[side] = currentNode.leftChild;
	} else {
		if (!currentNode.rightChild.leftChild){//If the current node has a right (greater) child, which in turn has no left (lesser) child
			currentNode.rightChild.leftChild = currentNode.leftChild;
			parent[side] = currentNode.rightChild;
		} else {//If the current node has a right (greater) child, which in turn does have a left (lesser) child
			smallestGrandchild = this.findSmallestGrandchild(currentNode);
			currentNode.value = smallestGrandchild.value;
			this.remove(smallestGrandchild.value);
		}
	}
	return true;
};

//Supporting methods
BinaryTree.prototype.findWithParent = function(value){
	const output = {
		parent: null,
		childSide: null,
		returnCurrentNode: function(){
			return this.parent[this.childSide];
		}
	};
	let currentNode = this.root;

	while (currentNode !== null){
		if (value > currentNode.value){
			output.parent = currentNode;
			output.childSide = "rightChild";
			currentNode = output.parent[output.childSide];

		} else if (value < currentNode.value){
			output.parent = currentNode;
			output.childSide = "leftChild";
			currentNode = output.parent[output.childSide];
		} else {
			break;
		}
	}

	return output;
};

BinaryTree.prototype.findSmallestGrandchild = function(node){
	let smallestGrandchild = node;
	while(smallestGrandchild.leftChild){
		smallestGrandchild = smallestGrandchild.leftChild;
	}

	return smallestGrandchild;
};

/*Test area
const test = new BinaryTree();

test.add(10);
test.add(8);
test.add(11);
test.add(12)
test.add(9);
console.log(test)
*/