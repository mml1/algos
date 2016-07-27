/*
	Bubble Sort: compare adjacent pairs to see if the are in the correct order.
	Complexity: O(n^2)
	Assumptions: Given an array. 
*/

function bubbleSort(arr){
	//check to see if there are more than one item
	if(arr.length<2){
		return arr;
	}
	for(var i = 0; i<arr.length; i++){
		for(var j = 0; j<arr.length-1; j++){
			if(arr[j+1] < arr[j]){
				var temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

// Testing
var toSort = [5,1,-5,12,11,18,-2]
console.log(bubbleSort(toSort));