function quickSwitch(arr, firstIndex, secondIndex){
	firstIndex === secondIndex ? null :
		arr[secondIndex] = [arr[firstIndex], arr[firstIndex] = arr[secondIndex]][0];
}

function pivotIt(arr, low, high){
	//Select the approximate middle element as the pivot, then move it to the front of the array temporarily
	let pivotIndex = Math.floor((high + low)/2);
	quickSwitch(arr, pivotIndex, low);
	pivotIndex = low;

	//Move all elements that are smaller than the pivot to the front of the array
	let j = low;
	for (let i = low+1; i <= high; i++){
		if (arr[i] < arr[pivotIndex]){
			quickSwitch(arr, i, j+1); 
			j++;
		}
	}

	//Move the pivot element past the range of smaller elements
	quickSwitch(arr, pivotIndex, j);
	pivotIndex = j;
	return pivotIndex;
}

function quickSort(arr, low, high){
	if (low === undefined){
		low = 0;
	}

	if (high === undefined){
		high = arr.length-1;
	}

	//Base case is a sub-array with zero or one elements
	if (low < high){
		const pivotIndex = pivotIt(arr, low, high);
		quickSort(arr, low, pivotIndex-1);
		quickSort(arr, pivotIndex+1, high);
	}
}