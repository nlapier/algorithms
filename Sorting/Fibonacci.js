function plainFib (num, start){
  	const init = start || 0;

	let sequence = [init, 1];
	for(let i = 0; i < num-2; i++){
	  const next = sequence[0] + sequence[1];
	  sequence = [sequence[1], next];
	}
	
	return sequence[1];
}

function recursiveFib(num, start){
  	const init = start || 0;

	if (num <= 1 - init){
		return 0;
	}

	if (num === 2 - init){
		return 1;
	}

	return recursiveFib(num-1, start) + recursiveFib(num-2, start);
}