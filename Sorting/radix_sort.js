const test =[9,4,233,10,22,100,4000];

function radixSort(arr){
	let sorting = true;
	let maxNumberLength = 1;
	let powerDigit = 0;
	let output = [...arr];
	let numberObj = {
		"0": [],
		"1": [],
		"2": [],
		"3": [],
		"4": [],
		"5": [],
		"6": [],
		"7": [],
		"8": [],
		"9": []
	};


	while (sorting){
	  sorting = false;
		for(let i = 0; i < arr.length; i++){
			const currentNumber = arr[i].toString();
			const currentDigit = currentNumber[powerDigit];
			if (currentDigit >= 0){
				numberObj[currentDigit].push(currentNumber);
			  console.log("numberObj[currentDigit: ", numberObj[currentDigit]);

				if(currentNumber.length > maxNumberLength){
				  maxNumberLength = currentNumber.length;
				  sorting = true;
				}
			} 
		}
		console.log(numberObj);

		output = [];
		for (let powerArray in numberObj){
		  let currentArray = numberObj[powerArray];
			if (currentArray){
			  console.log("powerArray: ", powerArray);
				currentArray.map(function(){
					output.push(currentArray.shift());
				});
			}
		}
		powerDigit++;
	}

	return output;
}

console.log(radixSort(test))