const arrayAnalysis = require('../code/arrayAnalysis.js');

test('Array Analysis 1', () => {
	expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toStrictEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

test('Array Analysis 2', () => {
	expect(arrayAnalysis([1, 1, 1])).toStrictEqual({
		average: 1,
		min: 1,
		max: 1,
		length: 3,
	});
});

test('Array Analysis 3', () => {
	expect(arrayAnalysis([0])).toStrictEqual({
		average: 0,
		min: 0,
		max: 0,
		length: 1,
	});
});
