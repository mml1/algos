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

	//works for 3X3 matrix and 2XN
	
*/


function spiralIn(array){
	var len = array.length;
	var combined = [];
	// if it is the 2XN case
	if(len%2 == 0){
		// add items in first row in order
		for(var i = 0; i < array.length; i++){
			if(i%2 == 0){
				for(var k = 0; k< array[i].length; k++){
					combined.push(array[i][k]);
				}
			} else {
				//add items in second row backwards
				for(var j = array[i].length-1; j >= 0; j--){
					combined.push(array[i][j]);
				}
			}
		}
		return combined;

	} else {
		
		//add items for the first row
		for(var i = 0; i < array[0].length; i++){
			combined.push(array[0][i]);
		}
		//add last element in the second row
		combined.push(array[1][array.length-1]);

		//add last row, last item in the initial array, add items backwards
		for(var j = array[2].length-1; j>=0; j--){
			combined.push(array[2][j]);
		}
		//add remaining rows
		combined.push(array[1][0]);
		combined.push(array[1][1]);

		return combined;
	}
}
var spin = [[1,2,3],[8,9,4],[7,6,5]];
var spinA = [[1,2,3,4],[8,7,6,5]];
console.log(spiralIn(spin));
console.log(spiralIn(spinA));