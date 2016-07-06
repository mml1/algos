/*
    Split the Address of a website into its protocol, domain, and context subsections
    Assumption: You are given a string
    Return: Array
*/

function splitAddress(url) {
    var arr =[];

    // Patterns needed to match
    var proPattern = /:/;
    var domPattern = /\.com/;
    
    // Find those patterns
    var proIdx = proPattern.exec(url);
    var domIdx = domPattern.exec(url);

    // Push the protocol, domain and context sections into the array 
    arr.push(url.substring(0, proIdx.index)); 
    arr.push(url.substring(proIdx.index+3, domIdx.index));
    
    if(url.substring(domIdx.index+4, url.length)){
        arr.push(url.substring(domIdx.index+5, url.length)); // Get context
    }

    return arr;
}
