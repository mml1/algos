/*
	Given a number calculate the factorial. 
*/

function factorial(n) {

  if (!n) {
    return 1;
  }

  //recursive call 
  return n*factorial(n-1) ;
}

//Testing
console.log(factorial(5));