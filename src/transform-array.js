const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * --discard-next   виключає наступний елемент масиву з перетвореного масиву.
 * --discard-prev   виключає попередній елемент масиву з перетвореного масиву.
 * --double-next    дублює наступний елемент масиву в перетвореному масиві.
 * --double-prev    дублює попередній елемент масиву в перетвореному масиві.
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    return `'arr' parameter must be an instance of the Array!`;
  }
  let workingArray = [...arr];
  // console.log(workingArray);
  workingArray.forEach((element, item, arr) => {
    // console.log(element, item, arr);
    // виключає попередній елемент масиву з перетвореного масиву
    if (element == '--discard-prev') {
      arr.splice(item - 1, 2)
    }
    // дублює наступний елемент масиву в перетвореному масиві
    if (element == '--double-next') {
      arr.splice(item, 1, arr[item + 1])
    }
    // виключає наступний елемент масиву з перетвореного масиву
    if (element == '--discard-next') {
      arr.splice(item, 2)
    }
    //  дублює попередній елемент масиву в перетвореному масиві.
    if (element == '--double-prev') {
      arr.splice(item, 1, arr[item - 1])
    }

  });
  // console.log(workingArray);
  return workingArray;


}

module.exports = {
  transform
};
