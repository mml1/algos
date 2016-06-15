/*
	Program that removes neg values from an array
	Limitations: no new array, maintain values in the same order
	Assumptions: all values in array are numbers. Given array
	Allowed: Usage of .pop()
*/

function noNegs(arr){
	var count = 0;
	var temp = 0;
	
	for(var i = 0; i<arr.length-count; i++){
		if(arr[i]<0){
			count++;
			//move all negs to the end or until last neg num moved
			for(var j = i; j<arr.length-count; j++){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		} 
	}

	//Remove all the negatives at the end of array
	while (count>0){
		arr.pop();
		count--;
	}
	return arr;
}

//Testing
var array =[-1,3,-5,9,10,4];
console.log(noNegs(array));