const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = [];
  let ind = [];
  arr.forEach((el, index) => {
    if (el != -1) {
      newArr.push(el);
    } else {
      ind.push(index);
    }
  });
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] != -1) {
      arr.splice(i, 1);
    }
  }
  newArr.sort(function(a, b) {
    return a-b
  });

  let index = 0;
  if (index == ind.length) {
    return newArr;
  }
  outer: for (let i = 0; i < newArr.length + ind.length; i++) {
    if (index == newArr.length) {
      return arr;
    } else {
      for (j = 0; j < ind.length; j++) {
        if (i == ind[j]) {
          continue outer;
        }
      }
      arr.splice(i, 0, newArr[index]);
      index++
    }
  }

  return arr;
}


module.exports = {
  sortByHeight,
};
