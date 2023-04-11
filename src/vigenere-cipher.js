const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse
  }
  encrypt(string, key) {
    if (arguments.length < 2 || typeof arguments[0] !='string' || typeof arguments[1] !='string') {
      throw new Error('Incorrect arguments!');
    } else {
      let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let kf = Math.ceil(string.length / key.length);
      key = key.repeat(kf);
      key = key.toUpperCase();
      string = string.toUpperCase();

      let result = [];
      for (let i = 0, k = 0; i < string.length; i++, k++) {
        if (!string[i].search(/[^A-Za-z]/)) {
          result.push(string[i]);
          k--;
        } else {
          let strInd = abc.indexOf(string[i]);
          let keyInd = abc.indexOf(key[k]);
          let sum = (strInd + keyInd) % abc.length;
          result.push(abc[sum]);
        }
      }
      if (this.reverse == false) {
        result.reverse()
        return result.join('')
      }
      return result.join('');
    }
  }

  decrypt(string, key) {
    if (arguments.length < 2 || typeof arguments[0] !='string' || typeof arguments[1] !='string') {
      throw new Error('Incorrect arguments!');
    } else {
      let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let kf = Math.ceil(string.length / key.length);
      key = key.repeat(kf);
      key = key.toUpperCase();
      string = string.toUpperCase();

      let result = [];
      for (let i = 0, k = 0; i < string.length; i++, k++) {
        if (!string[i].search(/[^A-Za-z]/)) {
          result.push(string[i]);
          k--;
        } else {
          let strInd = abc.indexOf(string[i]);
          let keyInd = abc.indexOf(key[k]);
          let diff = strInd - keyInd;

          if (diff < 0) {
            diff = diff + abc.length;
          }
          result.push(abc[diff]);
        }
      }
      if (this.reverse == false) {
        result.reverse()
        return result.join('')
      }
      return result.join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
