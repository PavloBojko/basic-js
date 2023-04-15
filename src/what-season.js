const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // spring, summer, autumn (fall), winter. весна, літо, осінь (осінь), зима.

  if (date) {
    if (!valdat(date)) {
      return 'Invalid date!';
    }

    let mis = date.getMonth();

    switch (true) {
      case mis === 11 || mis === 0 || mis === 1:
        return 'winter';

      case mis >= 2 && mis <= 4:
        return 'spring';

      case mis >= 5 && mis <= 7:
        return 'summer';

      case mis >= 8 && mis <= 10:
        return 'autumn';
    }

  }

  return 'Unable to determine the time of year!';
}
function valdat(obj) {
  return Object.prototype.toString.call(obj) === '[object Date]' && Object.values(obj).length === 0;
}

module.exports = {
  getSeason
};
