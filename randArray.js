/*
	Create an array with 10 values with random numbers between 0 - 100
*/

function randArr(){
	var arr = [];
	for (var i = 0; i <=10; i++){
		//generate a random number and push it into the arr
		arr.push(Math.floor(Math.random()*101));
	}
	return arr;
}
 //Testing
 console.log(randArr());