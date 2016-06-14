/*
	Program inserts a new number X at an index Y. But do not lose
	previous value.
	Limitations: no new array
	Assumptions: Y is an index in the array. 
	 There should be at least Y elements. 
	 All values in array are numbers

*/

function insertXaty(arr,x,y){
	//  Shift values to end to that particular index
	for (var i = arr.length; i > y; i--){
		arr[i] = arr[i-1];
	}
	// Insert X into that location
	arr[y] = x;
	return arr;
}

//Testing
var array = [1,7,9,5,4,2];

console.log(insertXaty(array,8,3));
