const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';
  if(options.repeatTimes === undefined){
    options.repeatTimes = 1;
  }
  for(let i = 0; i < options.repeatTimes; i++){
    result += str;
    if (options.additionRepeatTimes === undefined && typeof(options.addition) === 'string'){
      options.additionRepeatTimes = 1;
    }
    for (let i = 0; i < options.additionRepeatTimes; i++){
      result += options.addition;
      if(i !== options.additionRepeatTimes -1){
        result += options.additionSeparator;
      }
    }
    if(i !== options.repeatTimes - 1){
      if (options.separator){
        result += options.separator;
      } else {
        result += '+';
      }
    }
  }
  return(result);
};
  