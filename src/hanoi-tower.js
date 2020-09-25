const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2 ** disksNumber - 1;
  let seconds = turns/(turnsSpeed/3600);
  seconds = Math.floor(seconds);
  return ({turns: turns, seconds: seconds});
};
