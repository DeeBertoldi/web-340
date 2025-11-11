
const assert = require('assert');
const { divide, DivideByZeroError } = require('./divide');

function test_divide_ok() {
  assert.strictEqual(divide(10, 2), 5, '10 / 2 should be 5');
  console.log('✓ errors-demo: divide ok');
}

function test_zero() {
  assert.throws(() => divide(10, 0), DivideByZeroError, 'should throw DivideByZeroError');
  console.log('✓ errors-demo: throws DivideByZeroError on y=0');
}

function test_type() {
  assert.throws(() => divide('10', 2), TypeError, 'should throw TypeError for bad types');
  console.log('✓ errors-demo: TypeError for non-number args');
}

function demo_try_catch() {
  try {
    divide(3, 0);
  } catch (err) {
    if (err instanceof DivideByZeroError) {
      console.log('Caught friendly: do not divide by zero');
    } else {
      console.error('Unexpected error:', err);
    }
  }
}

test_divide_ok();
test_zero();
test_type();
demo_try_catch();
