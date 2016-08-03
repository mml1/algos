/*
	Merge Sort:
	1 - Divide the array into sorted array or arrays containing one element
	2 - Combine the sorted arrays, "merge", until you have one whole array
		a- by checking each item in the array with the other items in the other array
*/
mergeSort([3,4,5,1,2]);

function mergeSort(arr){
	if (arr.length == 1){
		return arr;
	}	
	var left = arr.slice(0, arr.length/2);
	var right = arr.slice(arr.length/2, arr.length);
	
	// to think of this
	var sortedArray= merge(mergeSort(left), mergeSort(right));
	return sortedArray;
}

function merge(left,right){
	// Comparing the left items to the right items and making a new sorted array
	var sorted = [];
	var leftIdx = 0;
	var rightIdx = 0;
	
	while(leftIdx < left.length && rightIdx < right.length){
		// compare the item in left with right
		if(left[leftIdx] < right[rightIdx] ){
			sorted.push(left[leftIdx]);
			leftIdx++;
		} else{
			sorted.push(right[rightIdx]);
			rightIdx++;
		}
	}

	if(leftIdx == left.length){
		for(var i = rightIdx; i < right.length; i++){
			sorted.push(right[i]);			
		}
	} else {
		for(var j = leftIdx; j < left.length; j++){
			sorted.push(left[j]);			
		}	
	}
	return sorted;
}