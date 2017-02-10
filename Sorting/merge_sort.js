function mergeSort(arr){
  //Returns sorted array; does not mutate arguments
	let output = [...arr];

	function moveElement(array, oldIndex, newIndex){
		let element = array.splice(oldIndex, 1)[0];
		array.splice(newIndex+1, 0, element);
	} 

	function findCorrectIndex(array, currentIndex){
	  let element = array[currentIndex];
		for (let j = currentIndex-2; j >= 0; j--){
			if (element > array[j]){
				return j;
			}
		}
	}

	for(let i = 1; i < output.length; i++){
		if (output[i] < output[i-1]){
			let newIndex = findCorrectIndex(output, i);
			moveElement(output, i, newIndex);
		}
	}

	return output;
}