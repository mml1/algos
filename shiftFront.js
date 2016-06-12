/*
	Shift values one space to the front in an array.
*/

function shiftFrontMod(arr){
	if (arr.length ==1){
		arr[0] = 0;
	} else {
		for(var i = 0; i<arr.length-1; i++){
			arr[i] = arr[i+1]
		}
		arr[arr.length-1]=0;
	}
	return arr;
}

//Testing
var arMod = [1,2,3,5,9];
console.log(shiftFrontMod(arMod));

/*
	Shift values one space to the front in an array.
	Keeps array the same size by replacing last value with zero.
	Method uses a new array or extra space in memory... Will need to fix this
*/

function shiftFront(arr){
	var shift = [];
	if (arr.length ==1){
		arr[0] = 0;
	} else {
		for(var i = 1; i<arr.length; i++){
			shift.push(arr[i]);
		}
		shift.push(0);
	}
	return shift;
}

//Testing
var ar = [1,2,3,5,9];
console.log(shiftFront(ar));