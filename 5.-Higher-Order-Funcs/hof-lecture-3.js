// Строки и коды символов

// Определим, каким шрифтом набран фрагмент текста,
// для этого нам нужно знать код символа:

function characterScript(code) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => {
			return code >= from && code < to;
		})) {
			return script;
		}
	}
	return null;
}

console.log(characterScript(121)); // {name: "Latin", ...}

// Метод some - принимает текстовую функцию и сообщает, возвращает ли она
// true для любого элемента массива.


// такие свойства как length имеют дело не с символами напрямую, а с кодовыми единицами
// наиболее распространенные символы занимают одну 16-битную код. ед. (65к символов),
// остальные занимают 2 кодовые единицы:

let horseShoe = "🐎👞";
horseShoe.length; // 4
horseShoe[0] // (Invalid half-character)

// Метод charCodeAt() возвращает код символа,
// а метод codePointAt() возвращает полный символ Unicode:

horseShoe.charCodeAt(0); // 55357 (code of half-character)
horseShoe.codePointAt(0); // 128052 (actual code for horse emoji)

// Цикл for/of можно использовать и перебора символов в строке,
// при этом он даёт реальные символы, а не кодовые единицы:

let roseDragon = "🥀🐉";
for (let char of roseDragon) {
	console.log(char);
}
// 🥀
// 🐉


// Распознавание текста

// Подсчитаем количество символов, принадлежащих каждому шрифту:

function countBy(items, groupName) {
	let counts = [];
	for (let item of items) {
		let name = groupName(item);
		let known = count.findIndex(c => c.name == name);
		if (known == -1) {
			count.push({name, count: 1});
		} else {
			count[known].count++;
		}
	}
	return counts;
}

counyBy([1, 2, 3, 4, 5], n => n > 2);
// [{name: false, count: 2}, {name: true, count: 3}]

// Метод findIndex находит первое значение, для которого заданная функция
// возвращает true.
// Если элемент не найден, то, как и indexOf, он возвращает -1.


// Функция, сообщающая, какие шрифты были задействованы в данном тексте:

function textScripts(text) {
	let scripts = countBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.name : "none";
	}).filter(({name}) => name != "none");

	let total = scripts.reduce((n, {count}) => n + count, 0);
	if (total == 0) return "No scripts found";

	return scripts.map(({name, count}) => {
		return `${Math.round(count * 100 / total)}% ${name}`;
	}).join(", ");
}

textScripts('woof сука');
// 50% Latin, 50% Cyrillic
