const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  if (options.addition === false) {
    options.addition = 'false';
  }
  if (options.addition === null) {
    options.addition = 'null';
  }
  if (!options.addition) {
    options.addition = '';
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  let newStr = (str + options.addition + options.separator).repeat(
    options.repeatTimes
  );
  if (options.additionRepeatTimes > 1) {
    newStr =
      str +
      (options.addition + options.additionSeparator).repeat(
        options.additionRepeatTimes
      );

    newStr = (
      newStr.slice(0, newStr.length - options.additionSeparator.length) +
      options.separator
    ).repeat(options.repeatTimes);
  }

  return newStr.slice(0, newStr.length - options.separator.length);
}


module.exports = {
  repeater,
};
