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
 * repeatTimesвстановлює кількість numberповторів str;
 * separator є string роздільними повторами str;
 * additionє додатковим string, який додаватиметься до кожного повторення str
 * additionRepeatTimes встановлює кількість numberповторів addition
 * additionSeparator є string роздільними повтореннями addition.
 * 
 */
function repeater(str, options) {
  let sepor = options.additionSeparator ? options.additionSeparator : '|';
  let rozdil = options.separator ? options.separator : '+';
  let addMass = options.addition !== undefined ? new Array(options.additionRepeatTimes).fill(`${options.addition}`) : [];
  let addStr = addMass.join(sepor);
  let resultArr = new Array(options.repeatTimes).fill(`${str}${addStr}`);

  return resultArr.join(rozdil);
}

module.exports = {
  repeater
};
