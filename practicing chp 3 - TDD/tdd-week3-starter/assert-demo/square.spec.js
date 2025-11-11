
const assert = require('assert');
const { calculateSquareRoot } = require('./square');

function test_happy() {
  const result = calculateSquareRoot(9);
  assert.strictEqual(result, 3, 'sqrt(9) should be 3');
  console.log('✓ assert-demo: happy path');
}

function test_type_error() {
  assert.throws(() => calculateSquareRoot('9'), TypeError, 'should throw TypeError for non-number');
  console.log('✓ assert-demo: TypeError on non-number');
}

function test_range_error() {
  assert.throws(() => calculateSquareRoot(-1), RangeError, 'should throw RangeError for negative');
  console.log('✓ assert-demo: RangeError on negative');
}

// Run tests
test_happy();
test_type_error();
test_range_error();
