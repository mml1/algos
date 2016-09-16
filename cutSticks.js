/*
    Cutting sticks by the smallest
*/
function cutSticks(lengths) {
    // count to see how many are higher than 0 
    var min = minFind(lengths);
    
    while(min>0){
    	var count = 0;
        for(var i =0; i<lengths.length; i++){
            if(lengths[i]>0){
                count++;
            }
        }

        console.log(count);
        // cut by min
        for(var j =0; j<lengths.length; j++){
            lengths[j] -= min;
        }
        min = minFind(lengths);
    }

}
function minFind(arr){
    var min = 1000000;
    var zeros= 0;
    for(var i = 0; i<arr.length; i++){
             // find min
            if(arr[i] < min && arr[i]>0){
                min = arr[i];
            }
            if(arr[i]<=0){
            	zeros++;
            }
    }
    if (zeros == arr.length){
    	min = 0;
    	return min;
    } else{
    	return min;	
    }
}