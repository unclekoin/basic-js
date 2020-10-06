const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    let tempArr = arr.slice();
    let result = [];

    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] === '--discard-next') {
            tempArr[i + 1] = '@$$';
        } else if (tempArr[i] === '--discard-prev') {
            tempArr[i - 1] = '@$$';
        } else if (tempArr[i] === '--double-prev') {
            tempArr[i] = tempArr[i - 1];
        } else if (tempArr[i] === '--double-next') {
            tempArr[i] = tempArr[i + 1];
        }
    }

    for (let i of tempArr) {
        if (i === '@$$' || i === '--discard-next' || i === '--discard-prev' || i === '--double-prev' || i === '--double-next' || i === undefined) {
            continue;
        } else {
            result.push(i);
        }
    }


    return result;
};
