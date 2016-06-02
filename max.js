//find max in array
function max(array){
	var maxNum = array[0];
	for (var i =0; i < array.length; i++){
		if(array[i] > maxNum){
			maxNum = array[i];
		}
	}
	console.log(maxNum)
}

array =  [-3, 3, 5, 7];
max(array);