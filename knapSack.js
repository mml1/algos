/*
	Integer Knapsack problem 
*/

var all = [];

//Generate all combinations of items that fits in the knapsack
function upToN(items,capacity,currentSize,combo){
	if(currentSize <= capacity){
		all.push(combo);
	} else {
		return;
	}
	
	for(var i = 0; i< items.length; i++){
		
		// both modified in the recursive call and for loop if not copied
		// combo added one thing, every recursive step you are adding a single item
		
		// copy prevents modification of combo each time it it goes through the for loop
		// so that the same combos are sent down the recursive call
		var newCombo = combo.slice();
		newCombo.push(items[i]);
		
		var newSize = currentSize;
		newSize = newSize + items[i][1];
		upToN(items,capacity, newSize, newCombo);
	}
}
// recursively generate a new combo at every step of the recursive call you are trying to make a choice at each branch
// if I don't make a copy 
var a = [[1,3],[1,2],[3,4]];
var num = 7;

upToN(a, num, 0, []);
console.log(all);

// Find the highest value
var highest = 0;
var highestIdx = 0;

// Tell me the values of the combos
for (var j = 0; j < all.length; j++){
	var sum = 0;
	
	for (var k = 0; k<all[j].length; k++){
		sum += all[j][k][0];
	}
	if(sum > highest){
		highest = sum;
		highestIdx = j;
	}
}
console.log(highest, all[highestIdx]);