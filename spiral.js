/*
	Spiral In: Given a matrix turn the numbers into a single array, by putting
	items in a spiral matter. First go through the first row than the outside wall
	then the lower wall, then left, but not including the number already put in, 
	lastly add the middle number

	Ex:
	1 2 3
	8 9 4
	7 6 5

	[[1 2 3] [8 9 4] [7 6 5]]
	=> [1 2 3 4 5 6 7 8 9]

	1 2 3 4
	8 7 6 5

	=> [1 2 3 4 5 6 7 8]

	[] spiralIn([][])
	

*/
// 3X3 matrix
function spiralIn(array){
	var combined = [];
	
	//add items for the first row
	for(var i = 0; i < array[0].length; i++){
		console.log("in row", array[0])
		combined.push(array[0][i]);
	}


	//add middle element in the second row
	combined.push(array[1][array.length-1]);
	// middle item of the middle of the array

	//add last row
	//last item in the initial array, add items backwards
	for(var j = array[2].length-1; j>=0; j--){
		combined.push(array[2][j]);
	}
	//add remaining rows
	combined.push(array[1][0]);
	combined.push(array[1][1]);

	// begining items of middle array until just before the last item

	return combined;
}
//Test
var spin = [[1,2,3],[8,9,4],[7,6,5]];
console.log(spiralIn(spin));
