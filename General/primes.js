function isPrime(num){ 
    for (var i = num-1; i>1; i--){
        if (num%i === 0){return false}
        else{continue}
    }
    return true;
}

function listPrimes(num) {
  while(num>1){//Since this program decrements num on each pass, this will stop the program after reaching the lowest prime
    for(i=Math.floor(num/2); i>=1; i--){//Tests each new iteration of num for primacy, stopping the for loop as soon as num fails the prime test
        if(num%i===0){break}
    }
    if(i === 1){console.log(num)}//Prints num only after it has been proven prime, by "surviving" the for loop
    num--;//Decrments num once per pass of the while loop
  }
}