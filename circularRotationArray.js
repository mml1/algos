function processData(input) {
    
    var data = input.split("\n");
    var firstInputLine = data[0].split(" ");
    var numRotations = firstInputLine[1];
    var numQueries = firstInputLine[2];
    var array = data[1].split(" ");
    var queries = data.splice(2);
    var temp = '';
    // next # are questions about positions
    
    // rotate array
    while(numRotations > 0){
        temp = array[array.length-1];
        for(var i =array.length-1; i>=0; i--){
            array[i] = array[i-1];
        }
        array[0] = temp;
        numRotations--;
    }
    // give me the values for the wanted queries 
    for(var j = 0; j < queries.length; j++){
        console.log(array[queries[j]])
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