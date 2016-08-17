/*
	Draw a right sided stair cases with the height of the size given
*/

function staircase(size) {
    var n = size;

    for(var i =1; i<=n;i++){
        console.log(" ".repeat(n-i) + "#".repeat(i));
    }
}

//Testing
staircase(6);