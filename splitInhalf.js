/*
	Algorithm splits an array in half.
*/

var toSort =[3,2,4,1]
var ordered = []

function splitInHalf(arr){
  if(arr.length == 1){
  	//save the splits in ordered array to access it later
    ordered.push(arr);
    return arr;
  }
  
  //slice is inclusive, so end number is not included
  var left = arr.slice(0,Math.floor(arr.length/2));
  var right = arr.slice(Math.floor(arr.length/2), arr.length);

  //two recursive calls
  splitInHalf(left);
  splitInHalf(right);
}

splitInHalf(toSort);
console.log(ordered);