/*
	Transform a matrix into a 1d array
	through a spiral pattern.
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

var combined = [];
function spiralIn(array){
	if (array.length == 0){
		return;
	}
	// add top items
	for (var i =0; i<array.length;i++){
		combined.push(array[0][i]);
	}
	// remove top 
	array.shift();
	// flip matrix
	var flipArray = flipMatrix(array);
	// repeat
	return spiralIn(flipArray);
	
}


function flipMatrix(array){
	//Flip -90, by switching rows with col
	var flipped = [];
	var reverseFlipped = [];
	if(array.length<1){
		return array;
	}
	for(var j = 0; j<array[0].length;j++){
		flipped.push([]);
	}

	for(var i = 0; i < array.length; i++){
		for(var j = 0; j<array[i].length;j++){
  	  		flipped[j].push(array[i][j]);
		}
	};
	//reverse the flipped array
	for(var k = flipped.length-1; k >=0 ;k--){
		reverseFlipped.push(flipped[k]);
	}
	return reverseFlipped;
}

var spin = [[1,2,3],[8,9,4],[7,6,5]];
var spin2=[[1,2,3,4],[8,7,6,5]]
spiralIn(spin2)
console.log(combined)
