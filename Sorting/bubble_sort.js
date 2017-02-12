function bubbleSort(arr){
	function quickSwitch(arr, firstIndex, secondIndex){
		firstIndex === secondIndex ? null :
		  arr[secondIndex] = [arr[firstIndex], arr[firstIndex] = arr[secondIndex]][0];
	}

	const output = [...arr]

	let sorting = true;
	while(sorting){
		sorting = false;
		for (let i = 0; i < output.length; i++){
			if (output[i] > output[i+1]){
				quickSwitch(output, i, i+1);
				sorting = true;
			}
		}
	}
	return output;
}