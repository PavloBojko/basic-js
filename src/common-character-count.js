const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Mass = s1.split('');
  let s2Mass = s2.split('');
  let crosCheck = s1Mass.filter(element => {
    let index = s2Mass.indexOf(element);

    if (index >= 0) {
      s2Mass.splice(index, 1);

      return true;
    }

    return false;
  });

  return crosCheck.length;
}

module.exports = {
  getCommonCharacterCount
};
