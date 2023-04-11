const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // let arr = [];
  // let row = [];
  // let num = 0;
  for (let i = 0; i < matrix.length; i++) {
    // row = []
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == '') {
        return
      } else {
        // num = 0;
        if (j > 0 && matrix[i][j - 1] == true) {
          num++;
        } 
        if (i > 0 && j > 0 && matrix[i - 1][j - 1] == true) {
          num++;
        } 
         if (i > 0 && matrix[i - 1][j] == true) {
          num++;
        } 
         if (i > 0 && j < matrix[0].length - 1 && matrix[i - 1][j + 1] == true) {
          num++;
        } 
         if (j < matrix[0].length - 1 && matrix[i][j + 1] == true) {
          num++;
        } 
         if (i < matrix.length - 1 && j < matrix[0].length - 1 && matrix[i + 1][j + 1] == true) {
          num++;
        } 
         if (i < matrix.length - 1 && matrix[i + 1][j] == true) {
          num++;
        } 
         if (j > 0 && i < matrix.length - 1 && matrix[i + 1][j - 1] == true) {
          num++;
        }
        row.push(num)
      }
    }
    arr.push(row)
  }
  return arr;
}


module.exports = {
  minesweeper,
};
