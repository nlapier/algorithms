function reverseInPlace(str){
	let output = str.split("");
	let i = 0, j = output.length - 1;
	while (i < j){
		output[i] = [output[j], output[j] = output[i]][0];
		i++;
		j--;
	}
	output = output.join("");
	return output;
}

function reverseString(str){
  var output = "";
  for (var i =(str.length-1); i>=0; i--){
      output += str[i];
  }
  return output;
}

function recursiveReverse(str, position){
	if (position === undefined){
		position = str.length-1;
	}

	if(position > 0){
		return str[position] + recursiveReverse(str, position-1);
	} else {//Base case
		return str[position];
	}
}
