/*
	depth first search: TO COME

*/

// Binary search tree
function BinaryNode(num){
	this.value = num;
	this.left = null;
	this.right = null;
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
var item = new BinaryNode(8);
var item2 = new BinaryNode(4);
var item3 = new BinaryNode(2);
var item4 = new BinaryNode(10);


evergreen.addChild(item);
evergreen.addChild(item2);
evergreen.addChild(item3);
evergreen.addChild(item4);


// Depth first search
/*
	returns node that corresponds to the value or null if not there. 
	DFS picks one path and keeps going down that path until it reaches the end, then goes back one branch at atime
	Uses stack 
*/


// recursive

function dfs(node, toFind){
	if (node === null){
		return null;
	}
	//check if node is equal to num looking for
	if (node.value == toFind){
		return node;
	}
	
	var leftResult = dfs(node.left, toFind)
	if (leftResult === null){
		return dfs(node.right, toFind);
	} else {
		return leftResult;
	}

}
dfs(evergreen.root,4)
