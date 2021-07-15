const capitalize = require('../code/capitalize.js');

test('Capitalize 1', () => {
	expect(capitalize('lion')).toBe('Lion');
});

test('Capitalize 2', () => {
	expect(capitalize('speeD')).toBe('SpeeD');
});

test('Capitalize 3', () => {
	expect(capitalize('wEATHER')).toBe('WEATHER');
});

test('Capitalize 4', () => {
	expect(capitalize('fast cARS')).toBe('Fast cARS');
});

test('Capitalize 5', () => {
	expect(capitalize()).toBe();
});
