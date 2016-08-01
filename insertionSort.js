/*
	Insertion Sort: Divide you array into sorted and unsorted portions. Initially, 
	the first item in the array is sorted. Compare the first item in the unsorted 
	portion to the last item in the sorted portion, if smaller than shift last item
	to the left and insert in front else put the item as the last item in the sorted 
	list. Repeat until no more unsorted items.
*/

function insertionSort(arr){
	// Go through each item in array, 
	// first time around first item is sorted rest unsorted
	var element;
	var j;
	for(var i = 1; i < arr.length; i++){
		// select element
		element = arr[i];
		j = i; 
		//compare element to item in sorted array
		while (j > 0 && element < arr[j-1]){
			// shift items to the left
			arr[j] = arr[j-1]
			j--;
		}
		arr[j] = element;
	}
	 console.log(arr);
}

var array = [3,4,1,5,2,0]
insertionSort(array);