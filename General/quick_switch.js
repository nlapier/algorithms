function quickSwitch(arr, firstIndex, secondIndex){
	arr[secondIndex] = [arr[firstIndex], arr[firstIndex] = arr[secondIndex]][0];
}