const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

function caesarCipher(string, shift) {
	let newString = '';
	for (let i = 0; i < string.length; i++) {
		oldLetter = string[i];
		if (alphabet.indexOf(oldLetter.toLowerCase()) == -1) {
			newString += oldLetter;
		} else if (oldLetter == oldLetter.toLowerCase()) {
			newLetterIndex = alphabet.indexOf(oldLetter) + shift;
			while (newLetterIndex > 25) {
				newLetterIndex -= 26;
			}
			while (newLetterIndex < 0) {
				newLetterIndex += 26;
			}
			newString += alphabet[newLetterIndex];
		} else {
			oldLetter = oldLetter.toLowerCase();
			newLetterIndex = alphabet.indexOf(oldLetter) + shift;
			while (newLetterIndex > 25) {
				newLetterIndex -= 26;
			}
			while (newLetterIndex < 0) {
				newLetterIndex += 26;
			}
			newLetter = alphabet[newLetterIndex];
			newString += newLetter.toUpperCase();
		}
	}
	return newString;
}

module.exports = caesarCipher;
