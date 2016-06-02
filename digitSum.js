function digitSum(n) {
    var sum = 0;
    var total = n;
    var rem = 0;
    // var hun = 0;
    // var tens = 0;
    
    // if (n%100!==0){
        
    //     hun = (n%100)%10;
    //     tens = (n%100 - n%10)/10;
    //     rem = n%10
    //     sum = hun + tens + rem
    // }
	while (n!=0){
		rem = Math.floor(n%10);
		sum +=rem;
		n = n/10;
	}
    
    return sum;
}

digitSum(111)