/*factorial*/

function prod(x,y){
	console.log(x,y)
	return x*y;	
}
function factorial(n){
	if(n === 1){
		return 1;
	}	
	return prod(n,factorial(n-1));
}
factorial(5);