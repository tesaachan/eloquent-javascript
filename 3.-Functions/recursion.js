function isEven(number) {
	if (number === 0)
		return (1);
	if (number === 1)
		return (0);
	return isEven(number - 2);
}

console.log(isEven(50)); //1
console.log(isEven(75)); //0
