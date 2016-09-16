/*
    HackerRank Divisible Sum Pairs
*/

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

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    var count = 0;
    // loop through elements
    for(var i =0; i < a.length; i++){
        var pair = 0;
        for(var j = i+1; j < a.length; j++){
            pair = a[i]+a[j];
            if(pair%k == 0){
                count++;
            }
        }

    }
    console.log(count)
}