const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  let obj = {};
  domains.forEach((el) => {
    arr.push(el.split('.'));
  });
  arr.forEach((el) => {
    el.reverse();
  });
  arr.sort((a, b) => b.length - a.length );
  let num = 1;
  for (let i = 0; i < arr.length; i++) {
    let str = '';
    for (let j = 0; j < arr[0].length; j++) {
      str = str + '.' + arr[i][j];
      if (arr[i][j] == undefined) {
        num = 1;
        continue
      } else if (obj.hasOwnProperty(str)) {
        obj[str] +=1
      } else {
        num = 1;
        obj[str] = num;
      }
    }
  }
  return obj;
}


module.exports = {
  getDNSStats,
};
