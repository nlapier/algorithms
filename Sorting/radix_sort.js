const test =[9,4,233,10,22,100,4000];

function pad(num, padLength){
	while(num.length < padLength){
		num = "0" + num;
	}
	return num;
}






function radixSort(arr){
	let sorting = true;
	let maxNumberLength = Math.max(arr).toString.length;
	let significantDigit = 0;
	let output = [...arr];






	return output;
}

console.log(radixSort(test))