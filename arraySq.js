//Square the values in the array

function squares(array){
	var sq = [];

	for (var i =0; i< array.length; i++){
		sq.push(array[i]*array[i]);
	}
	return sq;
}
