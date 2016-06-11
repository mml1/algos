// Count the numbers that are greater than the given parameter
	
function greaterThan(array, y){
	//Variables
	var count = 0;

	//Iterate through the array and count the larger number
	for (var i = 0; i<=array.length; i++){
		if(array[i]>y){
			count +=1;
		}
	}
	return count;
}
var array = [1,5,8,9];
var y = 2;
//See what was counted
console.log(greaterThan(array, y));