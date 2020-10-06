const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let counter = 0;
    matrix.forEach(function (item) {
        for (i of item) {
            if (i === '^^') {
                counter++;
            }
        }
    });
    return counter;
};