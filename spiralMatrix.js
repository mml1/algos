/*
	Transform a matrix into a 1d array
	through a spiral pattern.
	Ex:
	1 2 3
	8 9 4
	7 6 5

	[[1 2 3] [8 9 4] [7 6 5]]
	=> [1 2 3 4 5 6 7 8 9]

	1 2 3 4
	8 7 6 5

	=> [1 2 3 4 5 6 7 8]

	[] spiralIn([][])
*/

function takeOffTop(M) {
	return M.splice(0,1)[0];
}

function rotateCCW(M) {
	var result = [];
	// For each column in M
	for (var j = M[0].length - 1; j >= 0; --j) {
		var row = [];
		// Write the column into the row
		for(var i = 0; i < M.length; ++i) {
			row.push(M[i][j]);
		}
		result.push(row);
	}
	return result;
}


function spiral(M) {
	var result = [];
	while (true) {
		var top = takeOffTop(M);
		Array.prototype.push.apply(result,top);
		if (M.length === 0 || M[0].length === 0) {
			break;
		}
		M = rotateCCW(M);
	}
	return result;
}
function spiralRecursive(M,arraySoFar) {
	var top = takeOffTop(M);
	Array.prototype.push.apply(arraySoFar,top);
	if (M.length === 0 || M[0].length === 0) {
		return;
	}
	M = rotateCCW(M);
	spiralRecursive(M,arraySoFar)
}
//Testing

var matrix = [	
				[1,2,3],
				[4,5,6],
				[7,8,9]
			];

//spiral(matrix)
var result = [];
spiralRecursive(matrix,result);
console.log(result);
