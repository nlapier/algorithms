function selectionSort(arr){
	function quickSwitch(arr, firstIndex, secondIndex){
		firstIndex === secondIndex ? null :
		  arr[secondIndex] = [arr[firstIndex], arr[firstIndex] = arr[secondIndex]][0];
	}

	const output = [...arr];

	for(let i = 0; i < output.length-1; i++){
		let nextIndex = i;
		for(let j = i+1; j < output.length; j++){
			if (output[j] < output[nextIndex]){
				nextIndex = j;
			}
		}
		quickSwitch(output, i, nextIndex);
	}

	return output;
}