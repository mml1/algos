function unique(str){
	var letters = {};
	for(var i = 0; i< str.length;i++){
		if (str[i] in letters){
			return false;
		} else {
			letters[str[i]] = 1;
		}
	}
	return true;

}

//Testing
var test1 = "Ali A" //F
var test2 = "mango" //T
var test3 = "no" // T 

unique(test1)