function unique(str){
	if(typeof str !=='string'){
		return undefined;
	}
	var uni = "";
	var chars = {};
	for(var i = 0; i< str.length; i++){
		if(!(str[i] in chars)){
			chars[str[i]] = str[i];
		}
	}

	for(var char in chars){
		uni += chars[char];
	}
	return uni;
}

unique("ricecakesforeveryone")
