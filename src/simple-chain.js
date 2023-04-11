const {
  NotImplementedError,
  checkForThrowingErrors,
} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position != 'number' || position > this.chainArr.length-1 || position <= 0 || position%1 !=0) {
      this.chainArr = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.chainArr.splice(position-1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this
  },
  finishChain() {
    let final = this.chainArr.join('~~')
    this.chainArr = []
    return final;
  },
};


module.exports = {
  chainMaker,
};
