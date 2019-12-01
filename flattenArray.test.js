// To run this test, launch
//
// node flattenArray.test.js
const assert = require('assert')

const flattenArray = require('./flattenArray')

const tests = [
  {
    input: [[1,2,[3]],4],
    output: [1, 2, 3, 4]
  },
  {
    input: [],
    output: []
  },
  {
    input: ['a', 'b'],
    output: ['a', 'b']
  },
  {
    input: [1, [2, [3, [4, 5, [6, 7], 8], 9], 10, 11], 12],
    output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }
]


tests.forEach(({ input, output }) => {
  assert.deepEqual(flattenArray(input), output)
})

console.log(`run ${tests.length} tests`)
