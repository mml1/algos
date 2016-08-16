process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

// Prints the fraction amount of negs, pos, and zeros in an array 
function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var neg = 0.0;
    var pos = 0.0;
    var zero = 0.0;    
    for(var i = 0; i<arr.length; i++){
        if(arr[i] < 0){
            neg++;
        } else if (arr[i]>0){
            pos++;
        } else{
            zero++;
        }
    }
    //Returns digits with 6 ints after decimal
    var roundedNeg = (neg/n).toFixed(6)
    var roundedPos = (pos/n).toFixed(6);
    var roundedZero = (zero/n).toFixed(6);
    
    console.log(roundedPos);
    console.log(roundedNeg);
    console.log(roundedZero);
}