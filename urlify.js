/*  
	Task: Change spaces in a string to '%20'. If there are spaces at the end of the string,
	do not convert it to '%20' but return the converted string with the last nonspace char
*/

// function urlify(str, len){
// 	//Test if string is empty
// 	if(str.length < 1){
// 		return "Empty String"
// 	}
	
// 	// Split string into an array
// 	var charsInStr = str.split("")
// 	// Search for spaces
// 	for(var i= 0; i< len; i++){
// 		if(charsInStr[i] == " "){
// 			charsInStr[i] = "%20";
// 		}
// 	}
// 	// Remove the extra spaces
// 	var charsInStrLen = charsInStr.length-1
// 	for(var j = len-1; j < charsInStrLen; j++){
// 		charsInStr.pop();
// 	}
// 	return charsInStr.join("");
// }

var input= "Mr Smith     ";
var size= 8;
urlify(input, size);


function urlify(str, len){
	//Test if string is empty
	if(str.length < 1){
		return "Empty String"
	}
	var str2="";
	for(var i= 0; i< len; i++){
		if(str[i] == " "){
			str2 += "%20";
		} else {
			str2 += str[i];
	
		}
	}
	return str2;
}