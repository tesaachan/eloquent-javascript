// Классы

// Класс - вариант типа объекта, описывающий, какие методы и свойства имеет
// данный объект. Такой объект называется экземпляром класса.

// Чтобы создать экземпляр данного класса, нужно создать объект, производный
// от выбранного прототипа, а также задать свойства экземпляра данного класса:

// Используем функцию конструктор:

function makeRabbit(type) {
	let rabbit = Object.create(protoRabbit);
	rabbit.type = type;
	return rabbit;
}

// Конструктор можно упростить, если поставить перед вызовов функции
// ключевое слово new.
// Это значит, что объект с выбранным прототипом будет создан автоматически,
// он будет привязан к this и возвращен в конце выполнения функции.

function Rabbit(type) {
	this.type = type;
}

Rabbit.prototype.speak = function(line) {
	console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");

// Конструкторы автоматически получают свойство с именем prototype,
// по умолчанию - пустой объект, производный от Object.prototype.
// При желании его можно изменить.

// Имена конструкторов (по соглашению) пишутся с большой буквы.

// Однако настоящим прототипом самого конструктора является Function.prototype.
// Его свойством prototype является прототип создаваемого экземпляра.

Object.getPrototypeOf(Rabbit) == Function.prototype; // true
Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype; // true


// Запись классов

// Таким образом, классы в JS - функции конструкторы со свойством прототипа.
// В наши дни появилась новая запись классов:

class Rabbit {
	constructor(type) {
		this.type = type;
	}
	speak(line) {
		console.log(`${this.type} rabbit says: '${line}'`);
	}
}

let killerRabbit = new Rabbit("killing");
let blackRabbit = new Rabbit("black");

// Ключевое слово class означает начало описания класса. 
// Описание содержит конструктор и набор методов.
// Метод с именем constructor представляет собой функцию конструктор.
// Остальные методы содержатся в прототипе данного конструктора.

// !!!
// В настоящее время определния классов позволяют создавать в прототипе
// только методы - свойства, которые содержат функции.
// Пока что мы можем создавать такие свойства, управляя прототипом после того,
// как определили класс.

// Как и function, ключевое слово class может применяться в выражениях,
// так оно не определяет привязку, а лишь создаёт конструктор как значение:

let object = new class { getWord() { return "hello"; }};
console.log(object.getWord()); // hello


// Переопределение производных свойств

// Когда вы добавляете свойство объекту, если в прототипе уже было свойство
// с таким именем, то оно переопределяется.

Rabbit.prototype.teeth = "short";
console.log(killerRabbit.teeth); // short

killerRabbit.teeth = "long";
console.log(killerRabbit.teeth); // long
console.log(blackRabbit.teeth); // short

// Переопределение также применяется, чтобы придать стандартным прототипам
// функции и массива новый метод toString, отличный от базового свойства:

Array.prototype.toString == Object.prototype.toString; // false
console.log([1, 2].toString()); // 1, 2

// Вызов toString для массива аналогичен вызову .join(",").
// При вызове напрямую Object.prototype.toString для массива создаётся другая строка.
// Так она выдадет просто слово object и имя типа в квадратных скобках.

console.log(Object.prototype.toString.call([1, 2]));
// [object Array]
