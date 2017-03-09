function nextBigger(n){
  
  //Helper functions
  function numberToArray(number){
    return number.toString().split("").map((digit) => Number(digit));
  }
  
  function arrayToNumber(array){
    return Number(array.join(""));
  }
  
  //The meat and potatoes
  let workingArray = numberToArray(n);
  let fixedSubArray, poolSubArray, endSubArray, switchDigit, newSwitchIndex;
  
    for (let i = workingArray.length-1; i >= 0; i--){
      if (workingArray[i]> workingArray[i-1]){
        
        //The 'switch digit' is the highest-powered digit that requires rearragning
        switchDigit = workingArray[i-1]
        
        //All the digits of a higher power than the switch digit can be removed from the problem and set aside until the end
        fixedSubArray = workingArray.slice(0, i-1);
        
        //poolSubArray now contains all the digits that potentially must be rearranged
        poolSubArray = workingArray.slice(i-1);
        
        //First, we need to find the smallest digit in poolSubArray that is larger than switchDigit
        //We'll start by adding the largest digit from poolSubArray to endSubArray
        endSubArray = [];
        endSubArray.push(Math.max(...poolSubArray));

        //Now work through poolSubArray, until we find the correct digit to replace "switch digit"
        for (let j = 1; j < poolSubArray.length; j++){
          if (poolSubArray[j] > switchDigit && poolSubArray[j] <= endSubArray[0]) {
            endSubArray[0] = poolSubArray[j];
          }
        }

        //Once that's done, remove the new "switch digit" from poolSubArray to prevent duplication
        newSwitchIndex = poolSubArray.indexOf(endSubArray[0]);
        poolSubArray.splice(newSwitchIndex, 1);
        
        //Now, add the remaining numbers in poolSubArray to endSubArray, smallest to greatest
        while (poolSubArray.length){
          let poolIndex = poolSubArray.indexOf(Math.min(...poolSubArray));
          endSubArray.push(poolSubArray.splice(poolIndex, 1));
        }
        
        const newArray = fixedSubArray.concat(endSubArray);
        const output = arrayToNumber(newArray);
        return output;
      }
    }
    return -1;
}