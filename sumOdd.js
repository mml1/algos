//Print sum of odd numbers between 1 and 5000

var sum = 0;
for (var i =0; i<=5000; i++){
	if(i%2!=0){
		sum += i;
	}
}
console.log(sum);