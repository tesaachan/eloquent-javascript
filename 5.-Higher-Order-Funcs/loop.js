function loop(start, condition, next, body) {
	if (condition(start)) {
		body(start);
		loop(next(start), condition, next, body)
	}
}