// Как использовать на объект свойство hasOwnProperty, если оно включено
// в него как собственное свойство:

let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one")); // true
