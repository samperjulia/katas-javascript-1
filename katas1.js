function oneThroughTwenty() {
	let n = 20
  for(i = 1; i <= n; i++){
  	console.log(i);
  }

}
oneThroughTwenty()


function evensToTwenty() {
    let n = 20;
    let i = 1;
    while( i < 20){
    	if((i%2)==0){        
        console.log(i);
      }
      i++;
    }
}
evensToTwenty()

function oddsToTwenty() {
	let n = 20;
	let i = 1;
	while (i < 20){
		if ((i%2)!=0){
		console.log(i);
	   }
	   i++;
	}
}
oddsToTwenty()

function multiplesOfFive() {
	let n = 100;
	let i = 5;
	while (i <= n) {
		if ((i%5)==0){
		console.log(i);
	   }
	   i++;
	}
}
multiplesOfFive()

function countingBackWards() {
	let n = 20;
	let i = 1;
    while(n > 0) {
		console.log(n);
		n = n-1;
  }

}
countingBackWards()



function evenNumbersBackwards() {
	let n = 20;
    let i = 1;
    while( n > i){
    	if((n%2)==0){        
        console.log(n);
      }
      n=n-1;
    }
}
evenNumbersBackwards()

function oddNumbersBackwards () {
	let n = 20;
    let i = 1;
    while( n >= i){
    	if((n%2)!=0){        
        console.log(n);
      }
      n=n-1;
    }
}
oddNumbersBackwards ()


function multiplesOfFiveBackwards () {
	let n = 100;
	let i = 5;
	while (i <= n) {
		if ((n%5)==0){
		console.log(n);
	   }
	   n--;
	}
}
multiplesOfFiveBackwards ()


function squareNumbers() {
	let n = 100;
	let i =  1;
	let x = 0
	while (i <= n && x <= n){
		x = i*i;
		if(i*i <= n){
			console.log(x);	
		}
		i++;
	}
}
squareNumbers()



function squareNumbersBackwards () {
	let n = 1;
	let i = 100;
	while (i >= n){
		if(Math.sqrt(i) == true){
			console.log(i);	
		}
		i--;
	}
}
squareNumbersBackwards ()
