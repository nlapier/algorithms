function quickSwitch(input, firstIndex, secondIndex){
	input[secondIndex] = [input[firstIndex], input[firstIndex] = input[secondIndex]][0];
}

//firstElement = [secondElement, secondElement = firstElement][0]