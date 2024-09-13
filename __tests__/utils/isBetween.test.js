const isBetween = require('../../src/utils/isBetween');

// isBetween
describe('Test in isBetween from utils.js', () => {
  test('should return true if x is between and equal or not to max or min', () => {
    expect(isBetween(2,2,30)).toBeTruthy();
    expect(isBetween(30,2,30)).toBeTruthy();
    expect(isBetween(15,2,30)).toBeTruthy();
  });
  
  test('should return false if x is not between or equal to min and max', () => {
    expect(isBetween(2,5,30)).toBeFalsy();
    expect(isBetween(32,5,30)).toBeFalsy();
  });
});
