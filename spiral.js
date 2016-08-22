/*
	Spiral In: Given a matrix turn the numbers into a single array, by putting
	items in a spiral matter. First go through the first row than the outside wall
	then the lower wall, then left, but not including the number already put in, 
	lastly add the middle number

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
function spiral(M) {
	var RIGHT = 0;
	var DOWN = 1;
	var LEFT = 2;
	var UP = 3;
	var d = RIGHT;
	var x = 0; 
	var y = 0; 
	var directions = ["right", "down", "left", "up"];
	var directionX = [1, 0, -1, 0];
	var directionY = [0, 1, 0, -1];
	var walls = [M[0].length-1, M.length - 1, 0, 0];
	var resultArray = []; 
	
	function turnRight(d){
		return (d+1)%4;
	}
	// While the "walls" don't pass each other
	while (walls[RIGHT] >= walls[LEFT] && walls[DOWN] >= walls[UP]) { 
		resultArray.push(M[y][x]); 
		if (d == LEFT || d == RIGHT) { 
			// If we've reached the wall, move the wall we just moved along
			// inwards by 1, and turn to the right.
			// If we did move the wall, then we are temporarily inside the
			// wall, but will step out of it at the end of the loop
			if (walls[d] == x) { 
				if (d == RIGHT) { 
					walls[UP] += 1; 
				} else { 
					walls[DOWN] -= 1; 
				} 
				d = turnRight(d); 
			} 
			
		} else { 
			if (walls[d] == y) { 
				if (d == UP) { 
					walls[LEFT] += 1; 
				} else { 
					walls[RIGHT] -= 1; 
				} 
				d = turnRight(d); 
			} 
			
		} 
		
		x += directionX[d]; 
		y += directionY[d]; 
	} 
	return resultArray; 
}

var matrix = [	[1,2,3],
				[4,5,6],
				[7,8,9]];
spiral(matrix)