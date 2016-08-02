/*
	Find a number in a sorted array.
	Implement Binary Search. Compare the number given to the 
	mid point of the array, keep looking at mid points
*/

//Not recursive
function binarySearch(array, x){

	var high = array.length-1;
	var low = 0;
	var mid;
	
	while (low <= high){
		mid = Math.floor((high+low)/2);

		//if larger than midpoint, we look to the right
		if(x > array[mid]){
			low = mid+1;
		//if smaller than look to the left
		} else if (x < array[mid]){	
			high = mid-1;
		//if midpoint, return the midpoint
		} else {
			return array[mid];
		}
	}
	 return -1;
}

	// var mid = Math.floor(array.length/2);

	// //if larger than mid point
	// if(x > array[mid]){
	// 	//search in the right side
	// 	var right = array.slice(mid, array.length);	
	// 	return binarySearch(right, x);
	// } else if(x < array[mid]){
	// 	// search in the left side
	// 	var left = array.slice(0, mid)
	// 	return binarySearch(left, x);
	// } else if (array[mid] === x){
	// 	return array[mid];		
	// } else{
	// 	return -1;
	// }