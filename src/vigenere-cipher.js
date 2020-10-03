const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(m, k) {
    try {
    let message = m.toLowerCase();
    let key = k.toLowerCase();
		if (key.length < message.length) {
      let keyWord = '';
      message = message.toLowerCase();
			while (keyWord.length < message.length) {
				keyWord += key;
			}
			key = keyWord.slice(0, message.length - 1);
		}
		let result = '';
		let j = 0;
		for (let i = 0; i < message.length; i++) {
			if (message[i] === ' ') {
				result += ' ';
			} else if (/^[a-zA-Z]{0,}$/.test(message[i]) === false) {
				result += message[i];
			} else {
				let symbolCharCode =
					(message[i].charCodeAt() - 96 + key[j].charCodeAt() - 96) % 26;
        	if (symbolCharCode < 1) {
					symbolCharCode = 26 + symbolCharCode;
				}
				let b = String.fromCharCode(symbolCharCode + 95);
				result += b;
				j++;
			}
		}
    return(result.toUpperCase());
    } catch(e){
      throw new Error('THROWN');
    }
	}
	decrypt(m, k) {
    try {
    let message = m.toLowerCase();
    let key = k.toLowerCase();
		let keyWord = '';
		message = message.toLowerCase();
		while (keyWord.length < message.length) {
			keyWord += key;
		}
		key = keyWord.slice(0, message.length - 1);
		let result = '';
		let j = 0;
		for (let i = 0; i < message.length; i++) {
			if (message[i] === ' ') {
				result += ' ';
			} else if (/^[a-zA-Z]{0,}$/.test(message[i]) === false) {
				result += message[i];
			} else {
				let symbolCharCode =
					((message[i].charCodeAt() - 96) - (key[j].charCodeAt() - 96)) % 26;
				if (symbolCharCode < 0) {
					symbolCharCode = 26 + symbolCharCode;
				}
				let b = String.fromCharCode(symbolCharCode + 97);
				result += b;
				j++;
			}
		}
    return(result.toUpperCase());
  } catch(e){
    throw new Error('THROWN');
  }
	}
}

module.exports = VigenereCipheringMachine;
