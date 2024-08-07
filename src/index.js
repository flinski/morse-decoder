const MORSE_TABLE = {
	' ': ' ',
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
}

function decode(codeString) {
	let newCodeString = ''

	for (let i = 0; i < codeString.length; i += 10) {
		const letter = codeString.slice(i, i + 10)
		newCodeString += letter + '|'
	}

	newCodeString = newCodeString.slice(0, newCodeString.length - 1)

	const morseString = newCodeString
		.replace(/00/gi, '')
		.replace(/\*\*\*\*\*\*\*\*\*\*/gi, ' ')
		.replace(/10/gi, '.')
		.replace(/11/gi, '-')

	const decodeString = morseString
		.split('|')
		.map((morseLetter) => MORSE_TABLE[morseLetter])
		.join('')

	return decodeString
}

module.exports = {
	decode,
}
