const CustomError = require("../extensions/custom-error");
const chainMaker = {
  arr: [],
  getLength() {
    return this;
  },
  
  addLink(value) {
    if (value === null) {
      this.arr.push('null');
    } else {
      this.arr.push(value);
    }
    return this;
  },

  removeLink(position) {
    if (position < 1 || position > this.arr.length || typeof(position) !== 'number'){
      this.arr = [];
      throw new Error("THROWN");
    }
    this.arr.splice(position - 1 , 1);
    return this;  
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let str = this.arr.join(' )~~( ');
    this.arr = [];
    return '( ' + str + ' )';
  }
};

module.exports = chainMaker;
