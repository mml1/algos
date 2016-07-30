/*
	Write a function that is given an 
	integer n and returns a list of all factors of n.
	Assumptions: Integer is positive

*/

function factors(integer){
	// profiling function
	console.time("Found factors in")

	var listOfFactors = [];
	for(var i = 0; i < integer; i++){
		if(integer%i === 0){
			listOfFactors.push(i);
		}
	}

	// profiling function
	console.timeEnd("Found factors in")
	return listOfFactors;
}

//Testing
var num = 100;
console.log(factors(num));

/*
	What is the BigO? O(n) -> checks all numbers up to the integer given.
	Operations depend on the integer given.
*/

// Need to try different nums to see how fast my code is running