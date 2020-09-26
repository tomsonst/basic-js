const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
    this.r1 = 1;
    this.r2 = 1;
  }
  calculateDepth(arr){

    for (let i = 0; i < arr.length; i++){
      if (Array.isArray(arr[i])){
        this.r1 += 1;
        this.calculateDepth(arr[i]);
      }
    }
    this.r2 = Math.max(this.r1, this.r2);
    this.r1 = 1;
    return this.r2;
  }
  r1 = 1;
  r2 = 1;
};