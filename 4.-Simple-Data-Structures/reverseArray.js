function reverseArray(array) {
	let reversed = [];
	for (let a of array)
		reversed.unshift(a);
	return reversed;
}

function reverseArrayInPlace(array) {
	for (let i = 0; i < array.length / 2; ++i) {
		let temp;
		temp = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = temp;
	}
}

let ar = [1, 2, 3, 4, 5];
let rev = reverseArray(ar);
reverseArrayInPlace(ar);

for (let r of ar) {
	console.log(r);
}

for(let r of rev) {
	console.log(r);
}