const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let nameTeam = [];
  if (!(Array.isArray(members))){
    return false;
  }
  for (let i = 0; i < members.length; i++){
    if(typeof(members[i]) == 'string'){
      members[i] = members[i].trim();
      nameTeam.push(members[i][0].toUpperCase());
    }
  }
  if(nameTeam.length == 0){
    return false;
  }
  return nameTeam.sort().join('');
};
