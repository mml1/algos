/*
	Find the number that does not belong.
	Assumptions: two number will match

*/
function extra(a, b, c) {
   
   //compare all numbers to each other 
    if((a!=b) && a!=c){
        return A;
    } else if ((b!=a) && b!=c){
        return b;
    } else{
        return c;
    }
}
//Testing
console.log(extra(2,9,9));
