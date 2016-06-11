/*
	Replaces any negative number with a 
	zero in an array
*/

function negToZero(arr){
	for (item in arr){
		if (arr[item] <0){
			arr[item] = 0;	
		}

	}
	return arr;
}

// Testing 
var nums =[-1,2,3,-9]
console.log(negToZero(nums));