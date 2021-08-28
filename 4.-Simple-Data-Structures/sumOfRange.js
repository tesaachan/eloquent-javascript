function range(start, end, step) {
	let ar = [];
	step = (step !== undefined) ? step : 1;
	if (start <= end)
		for (let i = start; i <= end; i += step)
			ar.push(i);
	else
		for (let i = start; i >= end; i += step)
			ar.push(i);
	return ar;
}

function sum(array) {
	let num = 0;
	for (let ar of array)
		num += ar;
	return num;
}

function main() {
	console.log(sum(range(1, 10)));
	return 0;
}

main();