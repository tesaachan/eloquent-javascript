function arrayToList(array) {
	let list = null;
	for (let i = array.length - 1; i >= 0; --i) {
		list = {
			value: array[i],
			rest: list
		};
	}
	return list;
}

function listToArray(list) {
	let array = [];
	for (let node = list; node; node = node.rest) {
		array.push(node.value);
	}
	return array;
}

function prepend(element, list) {
	return {
		value: element, 
		rest: list
	};
}

function foundElem(list, value) {
	let i = 0;
	for (let node = list; node; node = node.rest) {
		if (node.value === value)
			return i;
		i++;
	}
	return undefined;
}

function nth(list, n) {
	if (!list) return undefined;
	if (n === 0) return list.value;
	return nth(list.rest, n - 1);
}

let ar = [1, 2, 3, 4];
let list = arrayToList(ar);
let new_ar = listToArray(list);
let liist = prepend(list, 12);
console.log(nth(liist, 0)); //12
