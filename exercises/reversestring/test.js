const { reverse, reverseES6 } = require('./index');

describe("reverse", () => {
  test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
  });

  test('Reverse reverses a string', () => {
    expect(reverse('abcd')).toEqual('dcba');
  });

  test('Reverse reverses a string', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
  });
})

describe("reverseES6", () => {
  test('Reverse function exists', () => {
    expect(reverseES6).toBeDefined();
  });

  test('Reverse reverses a string', () => {
    expect(reverseES6('abcd')).toEqual('dcba');
  });

  test('Reverse reverses a string', () => {
    expect(reverseES6('  abcd')).toEqual('dcba  ');
  });
})