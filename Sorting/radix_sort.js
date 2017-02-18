const test =[9,4,233,10,22,100,4000];

function createArray(value, length){
	let output = []
	for(let i = 1; i <= length; i++){
		output.push(value);
	}
	return output;
}

function radixSort(arr){
	let power = 1;
	let largestNumberLength = Math.max(arr).toString.length;
	const len = arr.length;

	while (largestNumberLength/power){
		const output = createArray(0, len);
		const countArray = createArray(0, 10);

		for(let i = 0; i < len; i++){
			const countIndex = Math.floor(arr[i]/power)%10;
			count[countIndex]++;
		}

		
	}

	return output;
}

console.log(radixSort(test))