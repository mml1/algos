/*
	Write a program that takes an array of numbers and replaces any neg 
	number with Dojo
*/

function numToStr(arr){
	for (var i = 0 ; i < arr.length; i++){
		//Search for neg number in array and replace
		if (arr[i] < 0){
			arr[i] = "Dojo"; 
		}
	}
	return arr;
}
//Testing

var array = [1,  -2, 4, -7]
console.log(numToStr(array));