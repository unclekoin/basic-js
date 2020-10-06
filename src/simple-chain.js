const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],
    clear() {
        this.chain = [];
        return this;
    },
    getLength() {
        return this.chain.length;
    },
    addLink(value = '') {
        this.chain.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (typeof position !== 'number' || (position ^ 0) !== position || this.chain[position - 1] === undefined) {
            this.clear();
            throw new Error();
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        for (let i = 0; i < this.chain.length - 1; i++) {
            if (this.chain[i].slice(-2) !== '~~') {
                this.chain[i] += '~~';
            }
        }
        let temp = this.chain.join('');
        this.clear();
        return temp;
    }
};

module.exports = chainMaker;
