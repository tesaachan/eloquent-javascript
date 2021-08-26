// массивы

let listOfNumbers = [2, 3, 5, 7, 11];

// свойства
// почти все значения в JS имеют свойства, кроме null и undefined
// элементы массива хранятся как свойства массива с числами в качестве имен
// array.length == array["length"]

// методы
// методы - свойства, значениями которых являются функции

let doh = 'aya';
console.log(typeof doh.toUpperCase); //function
console.log(doh.toUpperCase); //AYA
console.log(doh.toLowerCase); //aya 

// свойства содержащие функции обычно называют методами

// методы управления массивами

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence); // [1, 2, 3, 4, 5]
sequence.pop();
console.log(sequence); // [1, 2, 3, 4]
console.log(sequence.pop()) //4
console.log(sequence); // [1, 2, 3]

// метод push добавляет элемент в конец, метод pop удаляет последнее значение и возвращает его

// объекты

// аналог структур из C++

let day1 = {
	squirrel: false,
	events: ["работал", "трогал", "ел пиццу"]
};

console.log(day1.squirrel); //false
console.log(day1.wolf) //undefined
day1.wolf = false;
console.log(day1.wolf) //false

// при попытке прочитать несущ. свойство возвращается undefined
// объекту можно добавить свойство с помощью оператора =

// оператор delete удаляет свойство

let anObject = {left: 1, right: 2};
console.log(anObject.left); //1
delete anObject.left;
console.log(anObject.left) //undefined

// проверка на существование свойства с помощью оператора in:

console.log("left" in anObject); //false
console.log("right" in anObject); //true

// свойству можно присвоить значение undefined, но физически оно продолжит существовать

// Object.keys - узнать, какими свойствами обладает объект. Метод возвращает массив строк:

console.log(Object.keys({x: 0, y: 0, z: 2})); // ["x", "y", "z"]

// Object.assign - копирует все свойства из одного объекта в другой

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA); // {a: 1, b: 3, c: 4}

// массивы в JS своего рода объекты для хранения последовательностей

typeof [] //object

// массив объектов

let journal = [
	{events: ["работал", "трогал", "лапал"], squrrel: false},
	{events: ["работал", "ел", "скулил"], squirrel: true}
	/* и т.д. */
];

// изменяемость объектов

// существует разница между ссылками на один и тот же объект и двумя разными одинаковыми объектами

let object1 = {value: 10};
let object2 = Object1;
let object3 = {value: 10};

console.log(Object1 == Object2); //true
console.log(Object1 == Object3); //false

Object1.value = 15;
console.log(Object2.value); //15	- один и тот же объект с Object1, но по другой ссылке
console.log(object3.value); //10	- уже другой объект

const score = {visitors: 0, home: 0}; // константная ссылка на объект
score.visitors = 1;					  // допустимо, изменение свойства
score = {visitors: 1, home: 1}; 	  // недопустимо, изменение ссылки

// оператор == для объектов возвращает true только если оба объекта имеют одно и то же значение (адрес памяти)

