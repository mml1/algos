/*
  Find the number that appears the most in the array. Find the mode.
  Assumptions: There is a mode and array contains numbers
*/

function modeArray(arr) {
  var numbers = {};
  var mode = 0;
  var value = 0;
  
  // Put numbers in the array into a dictionary as a key and value put count
  for(var i = 0; i<arr.length; i++){
    if (arr[i] in numbers){
      numbers[arr[i]] += 1;
    } else {
      numbers[arr[i]] = 1;
    }
  }

  // Check which key/num in array has the largest number
  for (var num in numbers){
    if (numbers[num] > value){
      value = numbers[num];
      mode = num;
    }
  }

  // Convert string into int
  return parseInt(mode);
}

//Testing
var seq = [1,1,3,4,4,4,4,5,1]
console.log(modeArray(seq));

//Bug: Will only show one number for mode