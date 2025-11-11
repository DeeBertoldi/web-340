
function calculateSquareRoot(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) {
    throw new TypeError('n must be a number');
  }
  if (n < 0) {
    throw new RangeError('n must be >= 0');
  }
  return Math.sqrt(n);
}

module.exports = { calculateSquareRoot };
