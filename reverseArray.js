/*
	Reverse the values in an array. 
	Limitations: Do not use a new array. Do not use built in fxn.
	Assumption: All values in the array a numbers
*/


function reverseArr(arr){
	var temp = 0;

	//Iterate through the array until the mid point
	for (var i = 0; i < Math.floor(arr.length/2); i++){
		//swap values in reflection
		temp = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr[arr.length-1-i] = temp;
	}
	return arr;
}

//Testing
var array = [1,4,7,8,5,2] 
console.log(reverseArr(array));