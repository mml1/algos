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

// Bonus: think of a way to improve performance


var previousCalculated = {}
function factors(integer){
	// profiling function
	console.time("Found factors in")

	var listOfFactors = [];
	//see if it was calculated before
	if (integer in previousCalculated){
		console.timeEnd("Found factors in")
		return previousCalculated[integer];
	}

	// go through every number before the integer to see if it is a factor
	for(var i = 0; i < integer; i++){
		if(integer%i === 0){
			listOfFactors.push(i);
		}
	}
	previousCalculated[integer] = listOfFactors;
	
	// profiling function
	console.timeEnd("Found factors in")
	return listOfFactors;
}

//Testing
var num = 100000;
console.log(factors(num));


var num = 100000;
console.log(factors(num));
