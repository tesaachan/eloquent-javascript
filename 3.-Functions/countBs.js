function countBs(string) {
	console.log(countChar(string, 'B'));
}

function countChar(string, letter) {
	let count = 0;

	for (let i = 0; i < string.length; ++i) {
		if (string[i] == letter)
			count++;
	}
	return (count);
}

countBs('BBsop'); //2
countBs('abacaba'); //0
