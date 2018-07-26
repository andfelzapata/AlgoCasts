const { palindrome, palindromeV2 } = require('./index');

describe("palindrome", () => {
  test('palindrome function is defined', () => {
    expect(typeof palindrome).toEqual('function');
  });

  test('"aba" is a palindrome', () => {
    expect(palindrome('aba')).toBeTruthy();
  });

  test('" aba" is not a palindrome', () => {
    expect(palindrome(' aba')).toBeFalsy();
  });

  test('"aba " is not a palindrome', () => {
    expect(palindrome('aba ')).toBeFalsy();
  });

  test('"greetings" is not a palindrome', () => {
    expect(palindrome('greetings')).toBeFalsy();
  });

  test('"1000000001" a palindrome', () => {
    expect(palindrome('1000000001')).toBeTruthy();
  });

  test('"Fish hsif" is not a palindrome', () => {
    expect(palindrome('Fish hsif')).toBeFalsy();
  });

  test('"pennep" a palindrome', () => {
    expect(palindrome('pennep')).toBeTruthy();
  });
})

describe("palindromeV2", () => {
  test('palindrome function is defined', () => {
    expect(typeof palindromeV2).toEqual('function');
  });

  test('"aba" is a palindrome', () => {
    expect(palindromeV2('aba')).toBeTruthy();
  });

  test('" aba" is not a palindrome', () => {
    expect(palindromeV2(' aba')).toBeFalsy();
  });

  test('"aba " is not a palindrome', () => {
    expect(palindromeV2('aba ')).toBeFalsy();
  });

  test('"greetings" is not a palindrome', () => {
    expect(palindromeV2('greetings')).toBeFalsy();
  });

  test('"1000000001" a palindrome', () => {
    expect(palindromeV2('1000000001')).toBeTruthy();
  });

  test('"Fish hsif" is not a palindrome', () => {
    expect(palindromeV2('Fish hsif')).toBeFalsy();
  });

  test('"pennep" a palindrome', () => {
    expect(palindromeV2('pennep')).toBeTruthy();
  });
})
