function createArray(value, length){
	let output = [];
	for(let i = 1; i <= length; i++){
		output.push(value);
	}
	return output;
}

function countingSort(arr, base){
	const len = arr.length;
	const output = createArray(0, len);
	const countArray = createArray(0, 10);

	for(let i = 0; i < len; i++){
		const countIndex = (Math.floor(arr[i]/base))%10;
		countArray[countIndex]++;
	}
	
	for(let i = 1; i < 10; i++){
		countArray[i] += countArray[i-1];
	}
	
	let i = len-1;
	while(i>=0){
		const countIndex = (Math.floor(arr[i]/base))%10;
		countArray[countIndex]--;
		const outputIndex = countArray[countIndex];
		output[outputIndex] = arr[i];
		i--;
	}

	return output;
}

function radixSort(arr){
	let power = 1;
	const largestNumberLength = Math.max(arr).toString.length;
	let output = [...arr];

	while (largestNumberLength/power > 0){
		output = countingSort(output, power);
		power*=10;
	}
	return output;
}