/*
	You're given a positive integer n. 
	Your task is to represent this number as a product of two positive integers a and b, 
	such that a * b = n, a ≤ b, and the difference b - a is the smallest possible.

	Return the answer as an array of two elements [a, b].

	Example:
	For n = 10, the output should be
	Near_Square(n) = [2, 5].

	It's possible to write 10 in two ways: 2 * 5 = 10, 
	or 1 * 10 = 10. The 2 * 5 = 10 representation has 
	the smallest difference (b - a = 5 - 2 = 3), so the answer is [2, 5].
*/
function nearSquare(num){
	var factors = {};
	var minDiff = 0;
	var smallPair = [];
	var diff = 0;

	// go through numbers to find factors
	for (var i = 0; i <= num; i++){
		if(num % i === 0){
			if(i in factors || (num/i) in factors){
				continue;
			} else {
				factors[i] = [i, (num/i)];
			}
		}
	}
	// go through factors to find smallest difference
	for (var pair in factors){
		diff = factors[pair][1] - factors[pair][0];
		
		if(minDiff => diff){
			minDiff = diff;
			smallPair[0] = factors[pair][1] ; 
			smallPair[1] = factors[pair][0];
		}
	}
	
	return smallPair;
}