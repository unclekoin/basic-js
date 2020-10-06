const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if(date === undefined) return 'Unable to determine the time of year!';
    if(Object.prototype.toString.call(date) !== '[object Date]') throw Error();
        let month = date.getMonth();
        let season = '';
        if (month < 2 || month === 11) {
            season = 'winter';
        } else if (month < 5) {
            season = 'spring';
        } else if (month < 8) {
            season = 'summer';
        } else {
            season = 'autumn';
        }
        return season;
};