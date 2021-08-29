function every(array, test) {
	for (let a of array) {
		if (!test(a)) return false;
	}
	return true;
}