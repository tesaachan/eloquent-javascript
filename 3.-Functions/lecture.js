const square = function(x) {
	return x * x;
};

const square_ = x => x * x;

console.log(square(12)); //144

const power = function(base, exponent) {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
};

const power_ = (base, exponent) => {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
};

console.log(power(2, 10)); //1024

console.log("Голос из будущего:", future());

function future() {
	return "Летающих машин не будет";
}

const horn = () => {
	console.log("`Toot");
}

//Если передать функции слишком много аргументов, то они игнорируются
//если передать слишком мало, то отсутствуюшие параметры будут undefined

console.log(square(4, ture, 'sonic')); //16

function minus(a, b) {
	if (b === undefined) return -a;
	else return a - b;
}

//если после параметра поставить оператор = и значение, то аргумент примет это значение, если он не задан

function power__(base, exponent = 2) {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
}

console.log("C", "O", 2); //C O 2

//замыкания

function wrapValue(n) {
	let local = n;
	return () => local;
}

let wrap = wrapValue(1);

console.log(wrap()); //1


function multiplier(factor) {
	return Number => Number * factor;
}

let twice = multiplier(2);
console.log(twice(5)); //10

//функция - это значение, содержащее и тело с кодом, и окружение, в котором они созданы
