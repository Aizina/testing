import getNumberPower from './getNumberPower';

describe('getNumberPower', () => {
  test('raises 2 to the power of 3', () => {
    expect(getNumberPower(2, 3)).toBe(8);
  });

  test('raises -2 to the power of 3', () => {
    expect(getNumberPower(-2, 3)).toBe(-8);
  });

  test('raises 2 to the power of -2', () => {
    expect(getNumberPower(2, -2)).toBeCloseTo(0.25);
  });

  test('raises 0 to the power of 5', () => {
    expect(getNumberPower(0, 5)).toBe(0);
  });

  test('raises 5 to the power of 0', () => {
    expect(getNumberPower(5, 0)).toBe(1);
  });

  test('throws error when first argument is not a number', () => {
    expect(() => getNumberPower('2', 3)).toThrow('Both arguments must be numbers');
  });

  test('throws error when second argument is not a number', () => {
    expect(() => getNumberPower(2, '3')).toThrow('Both arguments must be numbers');
  });

  test('throws error when no arguments are provided', () => {
    expect(() => getNumberPower()).toThrow('Both arguments must be numbers');
  });


  test('handles very small numbers accurately', () => {
    expect(getNumberPower(10, -308)).toBeCloseTo(0);
  });

  test('raises 0 to the power of 0', () => {
    expect(getNumberPower(0, 0)).toBe(1);
  });
});