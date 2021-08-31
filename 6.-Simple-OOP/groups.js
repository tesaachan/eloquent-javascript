class Group {
	constructor() {
		this.members = [];
	}
	add(element) {
		if (this.members.indexOf(element) == -1)
			this.members.push(element);
	}
	delete(element) {
		let index = this.members.indexOf(element);
		if (index != -1)
			this.members.splice(index, 1);
	}
	has(element) {
		if (this.members.indexOf(element) != -1) return true;
		return false;
	}
	static from(array) {
		let someGroup = new Group();
		for (let a of array) {
			someGroup.add(a);
		}
		return someGroup;
	}
}

let group = Group.from([10, 20]);
console.log(group.has(10)); // → true
console.log(group.has(30)); // → false
group.add(10);
group.delete(10);
console.log(group.has(10)); // → false
