/*
	Selection Sort.
*/

function selectionSort(arr){
	// for every item in the array
	for(var i= 0; i<arr.length; i++){
		var minIdx = i;
		// find the min
		for(var j =i+1; j<arr.length;j++){
			if(arr[j] < arr[minIdx]){
				minIdx = j;
			}
			
		}
		//if the minIdx is not at the sorted array area
		if(minIdx != i){
			swap(arr,i,minIdx);
		}
	}
	return arr;
}


// swap two items in the array
function swap(arr, first, second){
	var temp = arr[first];
	arr[first] = arr[second];
	arr[second] = temp;
	return arr;
}

selectionSort([4,5,6,3,2]);