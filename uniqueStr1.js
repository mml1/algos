function unique(str){
	var letters = {};
	for(var i = 0; i< str.length;i++){
		if (str[i] in letters){
			letters[str[i]] = 2;
		} else {
			letters[str[i]] = 1;
		}
	}
	console.log(letters)
	for(var char in letters){
		if(letters[char]>1){
			return false;
		} else {
			return true;
		}
	}

}

//Testing
var test1 = "Ali A" //F
var test2 = "mango" //T
var test3 = "no" // T 

unique(test1)