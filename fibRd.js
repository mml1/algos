/*
	Implement a recursive version of fib(n) (which returns the nth element of the Fibonacci sequence). 
	Then implement a dynamic programming version of fib(n). 
	What is the big-O runtime of each version? Why?
*/

// Part 1: Recursive Fib
function rFib(num){
	if (num <= 0 ){
		return 0
	}
	if (num <= 2 ){
		return 1
	}
	return rFib(num-1) + rFib(num-2)
}

// Part 2: Dynamic Programming of Fib
