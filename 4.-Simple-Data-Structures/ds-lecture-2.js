let journal = [];
function addEntry(events, squirrel) {
	journal.push({events, squirrel});
}

addEntry(["работал", "трогал", "слизал"], false);
addEntry(["пил", "лапал", "слизал"], true);
addEntry(["выходной", "пил", "ел арахис"], true);

// Корелляция - степень зависимости между статистическими переменными.

// функция вычисления фи-коэффициента для одномерного массива

function phi(table) {
	return (table[3] * table[0] - table[2] * table[1]) /
		Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * 
			(table[1] + table[3]) * (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1])); //0,0686..


// извлечение таблицы 2х2 для оперделённого события этого журнала

// метод include в массиве проверяет, существует ли в нём заданное значение:

function tableFor(event, journal) {
	let table = [0, 0, 0, 0];
	for (let i = 0; i < journal.length; ++i) {
		let entry = journal[i], index = 0;
		if (entry.events.includes(event)) index += 1;
		if (entry.squirrel) index += 2;
		table[index] += 1;
	}
	return table;
}

console.log(tableFor("ел пиццу", journal)); // [76, 9, 4, 1]


// перебор массива в цикле:

for (let i = 0; i < journal.length; ++i) {
	let entry = journal[i];
	/* сделать что-то с entry */
}

// более простой перебор: аналог foreach:
// перебирает все элементы структуры указанной после of

for (let entry of journal) {
	console.log(`${entry.events.length} events`);
}


function journalEvents(journal) {
	let events = [];
	for (let entry of journal) {
		for (let event of entry.events) {
			if (!events.includes(event)) {
				events.push(event);
			}
		}
	}
	return events;
}

console.log(journalEvents(journal)); //["ел морковь", "делал зарядку", "выходной", ...]

for (let event of journalEvents(journal)) {
	console.log(event + ":", phi(tableFor(event, journal)));
}

//ел морковь:	 0.014097...
//делал зарядку: 0.0686...
//...

// большинство корелляций близки к нулю, значит эти события не влияют на превращение
// отфильтруем результаты: выведем только те, которые больше 0.1 или меньше -0.1

for (let event of journalEvents(journal)) {
	let correlation = phi(tableFor(event, journal));
	if (correlation > 0.1 || correlation < -0.1) {
		console.log(event + ":", correlation);
	}
}



// Широко используемые методы для работы с массивами

// 1.
// методы push и pop добавляют и удаляют элементы с конца массива,
// а методы unshift и shift добавляют и удаляют элементы с начала массива

// заполнение и извлечение задач из todo листа:

let todoList = [];
function remember(task) {
	todoList.push(task);
}

function getTask() {
	return todoList.shift();
}

function rememberUrgently(task) {
	todoList.unshift(task);
}

// 2.
// для поиска определённого элемента есть метод indexOf, который возвращает
// индекс первого найденного элемента или -1, если ничего не нашлось
// метод lastIndexOf аналогичен, но выполняет проверку с конца

// Эти методы принимают необязательный второй аргумент, указывающий, откуда начать поиск

[1, 2, 3, 2, 1].indexOf(2); //1
[1, 2, 3, 2, 1].lastIndexOf(2); //3

// 3.
// метод slice принимает начальный и конечный индексы и возвращает массив, содержащий элементы в этом промежутке:
// включая начальный и исключая конечный индексы
// если конечный индекс не задан, вернутся все элементы от заданного и до конца

[0, 1, 2, 3, 4].slice(2, 4); //[2, 3]
[0, 1, 2, 3 ,4].slice(2); //[2, 3, 4]

// 4.
// метод concat склеивает строки, аналогично оператору +
// если в concat передать аргумент, который не массив, значение будет добавлено в конец,
// как если бы это был массив из одного элемента

function remove(array, index) {
	return array.slice(0, index).concat(array.slice(index + 1));
}

remove(["a", "b", "c", "d", "e"], 2); //["a", "b", "d", "e"]
