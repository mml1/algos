/*
	Given an array find the max, min, average of the values
*/

function maxMinAvg(arr){
	
	var max = arr[0];
	var min = arr[0];
	var sum = 0;

	for(item in arr){
		//find min
		if(arr[item] < min){
			min = arr[item];
		}
		//find max
		if(arr[item]>max){
			max = arr[item];
		}
		//calculate sum to find avg
		sum += arr[item];
	}
	var avg = sum/arr.length;
	return [max,min, avg];
}

//Testing
var array = [10,5,8,9,4];

console.log(maxMinAvg(array));