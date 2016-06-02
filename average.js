//find average
var sum = 0;
var array = [1,3,5,7,20];

for(var i =0; i<array.length;i++){
	sum += array[i];
}

var average = sum/array.length;
console.log(average);