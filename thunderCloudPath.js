/*
    Need to finish
*/


for(var i =0; i < c.length-2;i++){
    if(c[i+1] == 1){ // check to see if thunderCloud
        if(c[i+2] == 0){
            steps++;
        }            
    }
    if(c[i+2] == 1){ // check to see if thunderCloud
        if(c[i+1] == 0){
            steps++;
        } 
    }
}
console.log(steps)