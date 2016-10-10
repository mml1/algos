function braces(arr){
	if(!Array.isArray(arr)){
		return undefined;
	}
	if(arr.length === 0){
		return undefined;
	}
	var balanced = 0;
	for(var i = 0 ; i <arr.length; i++){
		if(arr[i] == "("){
			balanced++;
		}
		if(arr[i] == "{"){
			balanced++;
		}
		if(arr[i] == "["){
			balanced++;
		}
		if(arr[i] == ")"){
			balanced--;
		}
		if(arr[i] == "]"){
			balanced--;
		}
		if(arr[i] == "}"){
			balanced--;
		}
	}
	if(balanced === 0){
		return true;
	} else {
		return false;
	}
}

var all = ["{", "{", "}", "[", "}", "]"]
braces([]);
