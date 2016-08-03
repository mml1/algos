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

function dfs(tree, toFind){
	var nodesToSearch = [];
	nodesToSearch.push(tree.root);
	
	while(nodesToSearch.length > 0){
		var current = nodesToSearch.pop();
		// var current = nodesToSearch.shift(); BFS

		if(current.value === toFind){
			return current;
		} 
		//push the children into the the nodesToSearch
		if(current.left != null){
			nodesToSearch.push(current.left)
			
		} 
		if (current.right !=null){
			nodesToSearch.push(current.right)
		}
	}
	return false;

}
dfs(evergreen,4)








