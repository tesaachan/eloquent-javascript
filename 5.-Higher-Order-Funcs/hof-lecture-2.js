// Набор данных о шрифтах

// массив SCRIPTS, содержащий объекты типа:

let someFont = {
	name: "Coptic",
	ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
	direction: "ltr",
	year: -200,
	living: false,
	link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
}


// Фильтрация массивов

function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (test(element)) {
				passed.push(element);
		}
	}
	return passed;
}

filter(SCRIPTS, script => script.living);
// [(name: "Adlam", ...), ...]

// здесь test - функциональное значение, заполняющие пробел в вычислениях
// функция filter уже реализована и является стандартной функцией массивов
// она не изменяет текущий массив, а возвращает новый (чистая)

SCRIPTS.filter(s => s.direction == 'ttb');


// Преобразование и отображение

// Метод map берёт массив, применяя ко всем элементам функцию,
// и возвращает новый массив

function map(array, transform) {
	let mapped = [];
	for (let element of array) {
		mapped.push(transform(element));
	}
	return mapped;
}

// метод map так же является стандартным методом массивов


// Суммирование с помощью reduce

// Вычисление одного значения на основе массивов:
// Метод reduce строит значение путём многократного получения одного элемента из массива
// и комбинированием его с текущим значением.

// Параметром reduce, кроме массива, так же являются комбинирующая функция и начальное значение:

function reduce(array, combine, start) {
	let current = start;
	for (let element of array) {
		current = combine(current, element);
	}
	return current;
}

reduce([1, 2, 3, 4], (a, b) => a + b, 0); // 10

// для стандартного метода массивов reduce необязательно указывать start, если
// исходный массив содержит хотя бы 1 элемент:

[1, 2, 3, 4].reduce((a,b => a + b)); // 10

// Поиск шрифта с наибольшим количеством символов:

function characterCount(script) {
	return script.ranges.reduce((count, [from, to]) => {
		return count + (to - from);
	}, 0);
}

SCRIPTS.reduce((a, b) => {
	return characterCount(a) < characterCount(b) ? b : a;
});
// {name: "Han", ...}


// Компонуемость

// Альтернативный вариант поиска самого большого шрифта без hof:

let biggest = null;
for (let script of SCRIPTS) {
	if (biggest == null || characterCount(biggest) < characterCount(script))
		biggest = script;
}

console.log(biggest);

// hof особенно полезны, когда нужно скомпоновать операции:
// вычислим средний год создания шрифтов живых и мертвых языков:

function average(array) {
	return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
	SCRIPTS.filter(s => s.living).map(s => s.year)))); //1188

console.log(Math.round(average(
	SCRIPTS.filter(s => !s.living).map(s => s.year)))); //188

// Данное вычисление можно было бы представить с помощью цикла:

let total = 0, count = 0;
for (let script of SCRIPTS) {
	if (script.living) {
		total += script.year;
		count++;
	}
}
console.log(Math.round(total / count)); //1188

// при этом второй вариант с циклами менее затратный, потому что при нём
// не создаются дополнительные массивы, а вычисляются только некоторые значения

// При обработки больших данных менее абстрактный вариант даст вам выигрыш в скорости
