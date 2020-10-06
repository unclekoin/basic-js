const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(mode = true) {
        this.mode = mode;
        this.alfabetLength = 26;
        this.asciiA = 65;
        this.asciiZ = 90;
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) throw new Error();

        const arrFromMessage = Array.from(message.toUpperCase());
        while (key.length < message.length) {
            key += key;
        }

        const arrFromKey = Array.from(key.toUpperCase());
        const shiftNumKey = arrFromKey.map((item) => {
            return item.charCodeAt() - this.asciiA;
        })
        let countSymbols = 0;

        let encryptMessage = arrFromMessage.map((item, index) => {
            if (item === ' ' || item.charCodeAt() > this.asciiZ || item.charCodeAt() < this.asciiA) {
                countSymbols++;
                return item;
            } else {
                if ((item.charCodeAt() + shiftNumKey[index - countSymbols]) > this.asciiZ) {
                    return String.fromCharCode((item.charCodeAt() + shiftNumKey[index - countSymbols]) - this.alfabetLength);
                } else {
                    return String.fromCharCode((item.charCodeAt() + shiftNumKey[index - countSymbols]));
                }

            }
        });

        if (this.mode === false) {
            return encryptMessage.reverse().join('');
        }
        return encryptMessage.join('');
    }
    decrypt(message, key) {
        if (message === undefined || key === undefined) throw new Error();

        const arrFromMessage = Array.from(message);
        while (key.length < message.length) {
            key += key;
        }

        const arrFromKey = Array.from(key.toUpperCase());

        let countSymbols = 0;

        let decryptMessage = arrFromMessage.map((item, index) => {
            if (item === ' ' || item.charCodeAt() > this.asciiZ || item.charCodeAt() < this.asciiA) {
                countSymbols++;
                return item;
            } else {
                if ((item.charCodeAt() - this.asciiA) + (this.asciiZ + 1 - arrFromKey[index - countSymbols].charCodeAt()) >= this.alfabetLength) {
                    return String.fromCodePoint((item.charCodeAt() - this.asciiA) + (this.asciiZ + 1 - arrFromKey[index - countSymbols].charCodeAt()) + this.asciiA - this.alfabetLength);
                } else {
                    return String.fromCodePoint((item.charCodeAt() - this.asciiA) + (this.asciiZ + 1 - arrFromKey[index - countSymbols].charCodeAt()) + this.asciiA);
                }
            }
        });
        if (this.mode === false) {
            return decryptMessage.reverse().join('');
        }
        return decryptMessage.join('');
    }
}

module.exports = VigenereCipheringMachine;
