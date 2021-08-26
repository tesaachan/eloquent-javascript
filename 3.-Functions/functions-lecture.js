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

//рекурсия

function power___(base, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		return base * power(base, exponent - 1);
	}
}

function findSolution(target) {
	function find(current, history) {
		if (current == target) {
			return history;
		} else if (current > target) {
			return null;
		} else {
			return find(current + 5, `(${history} + 5`) ||
					find(current * 3, `(${history} * 3`);
		}
	}
	return find(1, "1");
}

console.log(findSolution(24));
// (((1 * 3) + 5) * 3)


 function printFarmInventory(cows, chickens) {
	let cowString = String(cows);
	while (cowString.length < 3) {
		cowString = "0" + cowString;
	}
	console.log(`${cowString} cows`);
	let chickenString = String(chickens);
	while (chickenString.length < 3) {
		chickenString = "0" + chickenString;
	}
	console.log(`${chickenString} chickens`);
}
printFarmInventory(7, 11); //007 cows 011 chickens

//Вариант правильный с точки зрения функций:

function zeroPad(number, width) {
	let string = String(number);
	while (string.length < width) {
		string = '0' + string;
	}
	return string;
}

function printFarmInventory(cows, chickens, pigs) {
	console.log(`${zeroPad(cows, 3)} cows`);
	console.log(`${zeroPad(chickens, 3)} chickens`);
	console.log(`${zeroPad(pigs, 3)} pigs`);
}



//резюме

// 3 вида записи функций:
// для хранения её значения, объявление и короткая форма

const f = function(a) {
	console.log(a + 2);
};

function g(a, b) {
	return a * b * 3.5;
}

let h = a => a % 3;
