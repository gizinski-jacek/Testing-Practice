const reverseString = require('../code/reverseString.js');

test('Reverse string 1', () => {
	expect(reverseString('lion')).toBe('noil');
});

test('Reverse string 2', () => {
	expect(reverseString('speeD')).toBe('Deeps');
});

test('Reverse string 3', () => {
	expect(reverseString('wEATHER')).toBe('REHTAEw');
});

test('Reverse string 4', () => {
	expect(reverseString('fast cARS')).toBe('SRAc tsaf');
});

test('Reverse string 5', () => {
	expect(reverseString()).toBe();
});
