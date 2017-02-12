function compareAndMerge(arr1, arr2){
	let output = [];
	while (arr1.length + arr2.length > 0){
		if (arr1[0] < arr2[0]){
			output.push(arr1.shift());
		}else{
		  output.push(arr2.shift());
		}
	}
	return output;
}



function mergeSort(arr){



	if (arr.length)

	const half = Math.floor((arr.length-1)/2)




}