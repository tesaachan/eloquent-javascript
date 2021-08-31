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
		for (let a of array)
			someGroup.add(a);
		return someGroup;
	}
}

class GroupIterator {
	constructor(group) {
		this.i = 0;
		this.group = group;
	}
	next() {
		if (this.i < this.group.members.length)
			return {value: this.group.members[this.i++], done: false};
		else
			return {done: true};
	}
}

Group.prototype[Symbol.iterator] = function() {
	return new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
	console.log(value);
  }
  // → a
  // → b
  // → c
  