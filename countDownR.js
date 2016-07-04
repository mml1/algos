/*
	Recursive countdown 
	Assumptions: Given a number
*/

function countDownR(n){
	if (n === 0){
		return;
	} else {
		console.log(n);
		countDownR(n-1);
	}
}

// Invoke the countdown 
var num = 6;
countDownR(num);