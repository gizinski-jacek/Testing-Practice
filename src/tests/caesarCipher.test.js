const caesarCipher = require('../code/caesarCipher.js');

test('Caesar Cipher letter', () => {
	expect(caesarCipher('a', 1)).toBe('b');
});

test('Caesar Cipher capital letter', () => {
	expect(caesarCipher('A', 3)).toBe('D');
});

test('Caesar Cipher word', () => {
	expect(caesarCipher('Aaa', 2)).toBe('Ccc');
});

test('Caesar Cipher punctuators', () => {
	expect(caesarCipher(',.?!', 2)).toBe(',.?!');
});

test('Caesar Cipher phrase', () => {
	expect(caesarCipher('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');
});

test('Caesar Cipher wrap', () => {
	expect(caesarCipher('Z', 1)).toBe('A');
});

test('Caesar Cipher negative shift', () => {
	expect(caesarCipher('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
});

test('Caesar Cipher large shift', () => {
	expect(caesarCipher('Hello, World!', 75)).toEqual('Ebiil, Tloia!');
});

test('Caesar Cipher large negative shift', () => {
	expect(caesarCipher('Hello, World!', -29)).toEqual('Ebiil, Tloia!');
});
