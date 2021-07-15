const calculator = require('../code/calculator.js');

test('Calculator add', () => {
	expect(calculator.add(5, 4)).toBe(9);
});

test('Calculator substract', () => {
	expect(calculator.sub(5, 4)).toBe(1);
});

test('Calculator multiply', () => {
	expect(calculator.mul(5, 4)).toBe(20);
});

test('Calculator multiply', () => {
	expect(calculator.mul(5, 0)).toBe(0);
});

test('Calculator divide', () => {
	expect(calculator.div(5, 4)).toBe(1.25);
});

test('Calculator divide', () => {
	expect(calculator.div(5, 0)).toBe('Cannot divide by 0');
});
