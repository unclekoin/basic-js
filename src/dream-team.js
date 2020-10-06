const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;
    let dreamTeamName = '';
    members.map(function(i) {
      if(typeof i === 'string') {
        dreamTeamName += i.trim()[0].toUpperCase();
      }
    });
    return dreamTeamName.split('').sort().join('');
};
