//Variables
var odds = [];

//Array of odd numbers between 1 and 255
for (var i =0; i<=255; i++){
	if(i%2!==0){
		odds.push(i);
	}
}
//See what was saved
console.log(odds);