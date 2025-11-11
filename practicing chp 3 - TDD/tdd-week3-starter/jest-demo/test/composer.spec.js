
const { composer } = require('../src/composer');

test('returns uppercased non-empty values', () => {
  expect(composer('foo', 'bar')).toEqual(expect.arrayContaining(['FOO', 'BAR']));
});

test('filters out falsy values', () => {
  expect(composer('foo', '')).toEqual(['FOO']);
});
