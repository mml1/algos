/*
    Solution to Watson's Circular Array Rotation
*/


function processData(input) {
    var data = input.split("\n")
    var arr = data[1].split(" ");
    var first = data[0].split(" ");
    var q = data.splice(2)
    var k = parseInt(first[1]);
    var n = parseInt(first[0]);
    var rot = k % n
    for(var i = 0; i<q.length; i++){
        console.log(arr[(parseInt(q[i])+n - rot)%n])
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
