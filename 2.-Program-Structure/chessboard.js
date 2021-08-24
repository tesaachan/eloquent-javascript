let str;

for (let i = 0; i < 8; ++i) {
  str = '';
	for (let j = 0; j < 8; ++j) {
		if (i % 2 == 0) {
			if (j % 2 == 0)
        		str += ' ';
			else
				str += '#';
		}
		else {
			if (j % 2 == 0)
				str += '#';
			else
        str += ' ';
		}
	}
	console.log (str + '\n');
}
