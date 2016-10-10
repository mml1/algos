function lWord(str){
	// Go through each character until I reach a space
	// count how many characters were reached before getting to a space
	// save the word while going through and counting
	var max = 0;
	var count = 0;
	var word = "";
	var longest = "";
	
	for(var i =0 ; i < str.length; i++){
		if(str[i] !== " "){
			word += str[i];
			count++;
			if(count > max){
				max = count;
				longest = word;
			}
		} else {
			word = "";
			count = 0;
		}
	}
	return longest;	
}

lWord("the catslo in the hat");