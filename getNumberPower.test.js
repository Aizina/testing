import getNumberPower from './getNumberPower';

describe('getNumberPower', () => {
  test('raises 2 to the power of 5', () => {
    expect(getNumberPower(2, 5)).toBe(32);
  });

  test('raises 3 to the power of 3', () => {
    expect(getNumberPower(3, 3)).toBe(27);
  });

  test('raises 5 to the power of 0', () => {
    expect(getNumberPower(5, 0)).toBe(1);
  });

  test('raises 0 to the power of 5', () => {
    expect(getNumberPower(0, 5)).toBe(0);
  });

  test('raises -2 to the power of 3', () => {
    expect(getNumberPower(-2, 3)).toBe(-8);
  });

  test('raises 2 to the power of -2', () => {
    expect(getNumberPower(2, -2)).toBeCloseTo(0.25);
  });
})