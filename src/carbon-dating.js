const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  /**
   * t = ln(N/N0) / k,
   * where k = 0.693 / T[1/2].
   */

  if (typeof sampleActivity === 'string') {
    sampleActivity = Number(sampleActivity);

    if (sampleActivity > 0 && sampleActivity <= MODERN_ACTIVITY) {
      let i = 0.693 / HALF_LIFE_PERIOD;
      let j = Math.log(MODERN_ACTIVITY / sampleActivity) / i;

      return Math.ceil(j);
    }
  }

  return false;
}

module.exports = {
  dateSample
};
