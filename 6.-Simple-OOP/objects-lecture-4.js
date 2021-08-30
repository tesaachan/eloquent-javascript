// Интерфейс итератора

// Ожидается, что объект, переданный в for/of - итерируемый,
// т.е. обладает методом Symbol.iterator.
// При вызове данный метод возвращает объект, предоставляющий другой интерфейс 
// - итератор - выполняюший перебор.
// У итератора есть метод next, возвращающий следующий результат:
// объект со свойством value, которое содержит следующее значение, если оно есть,
// а также свойство done, являющееся истинным, если результатов больше нет.

// При этом имена next, value, done - не символы, а простые строки.
// Только метод Symbol.iterator - символ.

// Этот интерфейс можно использовать напрямую:

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next()); // {value: "O", done: false}
console.log(okIterator.next()); // {value: "K", done: false}
console.log(okIterator.next()); // {value: undefined, done: true}

// Реализуем итерируемую структуру данных.
// Создадим класс матрицы как двумерный массив:

class Matrix {
	constructor(width, height, element = (x, y) => undefined) {
		this.width = width;
		this.height = height;
		this.content = [];

		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				this.content[y * width + x] = element(x, y);
			}
		}
	}

	get(x, y) {
		return this.content[y * this.width + x];
	}

	set(x, y, value) {
		this.content[y * this.width + x] = value;
	}
}

// Содержимое хранится в массиве размером width * height.
// Элементы хранятся построчно, так что третий элемент пятой строки -
// это 4 * width + 2


// При переборе элементов матрицы нас обычно интересуют положение элементов
// и сами элементы, поэтому итератор будет создавать элементы со свойствами:
// x, y, value:

class MatrixIterator {
	constructor(matrix) {
		this.x = 0;
		this.y = 0;
		this.matrix = matrix;
	}

	next() {
		if (this.y == this.matrix.height) return {done: true};
		
		let value = {
			x: this.x,
			y: this.y,
			value: this.matrix.get(this.x, this.y)
		};
		this.x++;
		if (this.x == this.matrix.width) {
			this.x = 0;
			this.y++;
		}
		return {value, done: false};
	}
}

// Настроим итерируемый класс Matrix.

Matrix.prototype[Symbol.iterator] = function() {
	return new MatrixIterator(this);
}

// Теперь мы можем перебрать матрицу в цикле for/of:

let matrix = new Matrix(2, 2, (x, y) => `значение ${x},${y}`);
for (let {x, y, value} of matrix) {
	console.log(x, y, value);
}

// 0 0 значение 0,0
// 1 0 значение 1,0
// 0 1 значение 0,1
// 1 1 значение 1,1

