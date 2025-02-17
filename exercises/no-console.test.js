// eslint exercise 0 (no-console)
// When you're finished with this exercise, run
//   "npm start exercise.eslint.1"
//   to move on to the next exercise

const {RuleTester} = require('eslint')
const rule = require('./no-console')

const ruleTester = new RuleTester()
ruleTester.run('no-console', rule, {
  valid: ['info()'],
  invalid: [
    invalid('console.log()'),
    invalid('console.info()'),
    invalid('console.warn()'),
  ],
})

function invalid(code) {
  return {
    code,
    errors: [{message: 'Using console is not allowed'}],
  }
}

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=ASTs&e=eslint%20exerciese%201&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////
