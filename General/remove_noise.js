function removeNoise(str){
	const noise = ['%','$','&','/','#','·','@','|','º','ª','}'];
	const output = str.split("");
	output.forEach(function(element,index){
		if(noise.includes(element)){
			output[index] = undefined;
		}
	});
	return output.join("");
}