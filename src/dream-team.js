const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)) {
    return false;
  }
  let rez = '';
  members.forEach(element => {
    typeof element === 'string' && element !== '' && element.trim() !== '' ? rez += element.trim()[0].toUpperCase() : ''
  });
  let out = rez.split('').sort().join('')
  if (out === '') {
    return false
  } else {
    return out
  }
}

module.exports = {
  createDreamTeam
};
