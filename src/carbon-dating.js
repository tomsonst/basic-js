const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity <= 0 || sampleActivity > 15 || /[a-zA-Z]{1,}/.test(sampleActivity) == true || typeof(sampleActivity) !== 'string' ){
    return false;
  } else {
  let result = (Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity)))/0.0001209424;
  return (Math.ceil(result));
  }
};
