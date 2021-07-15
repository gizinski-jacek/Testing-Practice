const calculator = {
	add: (a, b) => a + b,
	sub: (a, b) => a - b,
	mul: (a, b) => a * b,
	div: (a, b) => {
		if (a == 0 || b == 0) {
			return 'Cannot divide by 0';
		} else {
			return a / b;
		}
	},
};

module.exports = calculator;
