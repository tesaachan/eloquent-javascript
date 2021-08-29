function deepEqual(first, second) {
	if (first === second) return true;
	if (typeof first != typeof second) return false;
	if (typeof first == "object" && typeof second == "object") {
		if (Object.keys(first).length == Object.keys(second).length) {
			for (let key of Object.keys(first)) {
				if (!Object.keys(second).includes(key) || !deepEqual(first[key], second[key])) return false;
			}
			return true;
		}
	}
	return false;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj)); // true
console.log(deepEqual(obj, {here: 1, object: 2})); // false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // true

// доступ к свойству объекта через переменную, например, key
// осуществляется через [], т.е.
// obj[key] вместо obj.key:

for (let key of Object.keys(obj)) {
	console.log(obj[key]);
}
