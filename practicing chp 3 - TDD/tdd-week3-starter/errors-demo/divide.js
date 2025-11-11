
class DivideByZeroError extends Error {
  constructor(message = 'Cannot divide by zero') {
    super(message);
    this.name = 'DivideByZeroError';
  }
}

function divide(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError('x and y must be numbers');
  }
  if (y === 0) {
    throw new DivideByZeroError();
  }
  return x / y;
}

module.exports = { divide, DivideByZeroError };
