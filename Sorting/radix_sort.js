function radixSort(arr){
	let maxNumberLength = 1;
	let output = [...arr];
	let numberObj = {
		"1": [],
		"2": [],
		"3": [],
		"4": [],
		"5": [],
		"6": [],
		"7": [],
		"8": [],
		"9": []
	}


	while (maxNumberLength){
		let powerDigit = 0;
		for(let i = 0; i < arr.length; i++){
			const currentNumber = arr[i].toString();
			const currentDigit = currentDigit[powerDigit];
			if (currentDigit >= 0){
				numberObj[currentDigit].push(currentNumber);
				currentNumber.length > maxNumberLength ? maxNumberLength = currentNumber.length : null;
			} 
		}

		output = [];
		for (powerArray in numberObj){
			if (powerArray){
				powerArray.map(function(){
					output.push(powerArray.shift());
				})
			}
		}
	}

	return output
}