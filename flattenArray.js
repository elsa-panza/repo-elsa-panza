/**
 *
 * Flatten an array of arbitrarily nested arrays of values into a flat array of values. e.g. [[1,2,[3]],4] -> [1,2,3,4].
 *
 * @param {Array} input
 * @returns {Array} output
 *
 * Author: Elsa Panza
 */

function flattenArray (input) {
  // Check that input is an array, if yes, flatten it with a recursive reducer.
  if (Array.isArray(input)) {
    return input.reduce(
      function flattener (accumulator, value) {
        if (Array.isArray(value)) {
          // If array item is an array, flatten it recursively...
          return accumulator.concat(value.reduce(flattener, []))
        } else {
          // ...otherwise append it to result array.
          return accumulator.concat(value)
        }
      }
      , []
    )
  } else {
    throw new TypeError('Argument must be an array')
  }
}

// CommonJS / ES6 export
module.exports = exports.default = flattenArray
