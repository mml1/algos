function uniqueIdx(str){
	if(typeof str !=='string'){
		return undefined;
	}
	var chars = {};
	var firstIdx = str.length;
	for(var i = 0; i< str.length; i++){
		if(!(str[i] in chars)){
			console.log("not in", str[i])
			chars[str[i]] = [1, i];
		} else {
			chars[str[i]][0]++;
		}
	}
	console.log(chars)
	for(var char in chars){
		if(chars[char][0] === 1){
			if(chars[char][1]<firstIdx){
				firstIdx = chars[char][1];
			}
			
		}
	}
	return firstIdx;
	

}

uniqueIdx("google");