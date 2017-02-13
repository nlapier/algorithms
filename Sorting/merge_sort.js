function compareAndMerge(arr1, arr2){
	let output = [];

	while ((arr1.length + arr2.length) > 0){
		if (arr1[0] < arr2[0] || arr2[0] === undefined){
			output.push(arr1.shift());
		} else {
			output.push(arr2.shift());
		}
	}
	return output;
}

function mergeSort(arr){
	if (arr.length <= 1){
		return arr;
	}
	const half = Math.ceil((arr.length)/2);
	const arr1 = arr.slice(0, half);
	const arr2 = arr.slice(half);

	return compareAndMerge(mergeSort(arr1), mergeSort(arr2));
}