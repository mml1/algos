/*
	Check to see if two strings are permutations of each other
*/

function isPerm(orig, other){
	var origChar = {};
	var otherChar = {};
	//Need to check if both are strings
	
	//check if they are the same length
	if(orig.length !=other.length){
		return false;
	} else {
		for(var i=0; i<orig.length; i++){
			if (orig[i]in origChar ){
				origChar[orig[i]] += 1;
				
			} else {
				origChar[orig[i]] = 0;	
			}
			if(other[i] in otherChar){
				otherChar[other[i]] += 1;
				
			} else {
				otherChar[other[i]] = 0;
			}
		}
		for(var char in otherChar){
			if (otherChar[char] == origChar[char]){
				continue;
			} else{
				return false;
			}
		}
		return true;
	}
}

//Testing

//True
var str1 = "ana";
var str2 = "aan";

//False
var str3 = "ana";
var str4 = "anc";

//False
var str5 = "aena";
var str6 = "aan";

isPerm(str1,str2);