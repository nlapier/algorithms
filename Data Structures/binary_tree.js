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
	childSide = null,
	currentNode = null;

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




/*Test area
const test = new BinaryTree();

test.add(10);
test.add(8);
test.add(11);
test.add(12)
test.add(9);
console.log(test)
*/