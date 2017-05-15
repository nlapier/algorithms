//Side-effect version
function quickSwitch(input, firstIndex, secondIndex){
	input[secondIndex] = [input[firstIndex], input[firstIndex] = input[secondIndex]][0];
}

//Pure function version
function quickSwitch(input, firstIndex, secondIndex){
	input[secondIndex] = [input[firstIndex], input[firstIndex] = input[secondIndex]][0];
	return input;
}

//Array method version
Array.prototype.quickSwitch = function (firstIndex, secondIndex){
	this[secondIndex] = [this[firstIndex], this[firstIndex] = this[secondIndex]][0];
};

//firstElement = [secondElement, secondElement = firstElement][0]