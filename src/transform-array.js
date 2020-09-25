const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arr2 = [];
  for(let i =0; i<arr.length; i++){
    if (arr[i] === '--discard-prev'){
      if(arr2[arr2.length - 1] !== '' || i !== 0){
        arr2.pop()
      } 
    } else if (arr[i] === '--double-prev') {
      if (!(i === 0)) {
        let a = arr2[arr2.length - 1];
        arr2.push(a);
      } 
    } else if (arr[i] === '--double-next') {
      if (!(i === (arr.length - 1))){
        let a = arr[i+1];
        arr2.push(a);
      } 
    } else if (arr[i] === '--discard-next') {
      if (!(i === (arr.length - 1))){
        if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev'){
          i+=2;
        } else{
          i++;
        }
      } 
    } else {
      arr2.push(arr[i]);
    }
  }

  
  return arr2;
};
'--discard-prev'
'--double-prev'
'--double-next'
'--discard-next'