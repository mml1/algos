/*
	A program that takes an array of numbers 
	and returns an array where the first and last 
	numbers in the array have been switched. No new
	array.
	
*/

function swapTwo(arr){
	//Assumed array takes in numbers
	//Return an array where the last and first values are switched
	//No new array

	var temp = 0;

	//Switch first and last numbers in array.
	temp = arr[0];
	arr[0] = arr[arr.length -1];
	arr[arr.length-1] = temp;

	return arr;
}

//Testing
var array = [1,8,7,3,6,5];

console.log(swapTwo(array));