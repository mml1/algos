/*
  Combine elements in the array with a separator into a string
*/

function combine(array, separator) {
    var combined ="";
    combined = array.join(separator) + separator;
    return combined;
}

// Testing

var arr = ["apple", "banana", "strawberries"];
var sep = " or ";

console.log(combine(arr,sep));