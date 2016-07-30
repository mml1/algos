/*
	Write a function that is given an 
	integer n and returns a list of all factors of n.
	Assumptions: Integer is positive

*/

function factors(integer){
	var listOfFactors = [];
	for(var i = 0; i < integer; i++){
		if(integer%i === 0){
			listOfFactors.push(i);
		}
	}
	return listOfFactors;
}

//Testing
var num = 100;
console.log(factors(num));

/*
	What is the BigO? O(n) -> checks all numbers up to the integer given.
	Operations depend on the integer given.
*/

// Need to profile code