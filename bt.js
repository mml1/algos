/*
	Implement a binary tree
*/

function Node(val){
		this.value= val;
		this.right= null;
		this.left = null;
}

function BinaryTree(){
	this.root = null;
}

BinaryTree.prototype.addChild = function(node){
	if(this.root === null){
		this.root = node;
	} else {
		//transverse through tree to find empty spot
		var current = this.root
		while(current !==null){
			if(node.value < current.value){
				if (current.left === null){
					current.left = node;
				} else {
					current = current.left;
				}
			} else if(node.value > current.value) {
				if(current.right === null){
					current.right = node;
				} else {
					current = current.right;
				}
			//it is already in the tree no need to add again
			} else {
				break;
			}
		}
	}
}

//Create a tree
var evergreen = new BinaryTree();
//Testing adding a child
var item = new Node(8);
var item2 = new Node(4);
var item3 = new Node(2);
var item4 = new Node(10);


evergreen.addChild(item);

evergreen.addChild(item2);
evergreen.addChild(item3);
evergreen.addChild(item4);

console.log(evergreen)
