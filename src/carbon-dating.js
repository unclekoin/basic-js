const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (isNaN(sampleActivity) || !sampleActivity || Number(sampleActivity) > 15 || typeof sampleActivity !== 'string' || sampleActivity == 0 || Number(sampleActivity) < 0) {
        return false;
    }
    return Math.ceil(Math.log(MODERN_ACTIVITY / parseInt(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
};