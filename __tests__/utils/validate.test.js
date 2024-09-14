const { validatePlate, validateDate, validateTime } = require('../../src/utils/validate');

// Validate plate
describe('Tests in validatePlate from utils.js', () => {
    test('should return true for valid plate', () => {
      const testPlate = "ABCD123";
      // It's a valid plate, so its going to be true.
      expect(validatePlate(testPlate)).toBeTruthy();
    });
    
    test('should return a false for a plate not longer than 6 digits', () => {
      const testPlate = "ABCD12";
      expect(validatePlate(testPlate)).toBeFalsy();
    });
  
    test('should return a false for a plate ending anything thats not a number', () => {
      const testPlate = "ABCD12*";
      expect(validatePlate(testPlate)).toBeFalsy();
    });
    
    test('should a true for a plate with spaces trimmed and valid', () => {
      const testPlate = "    ABCD123   ";
      expect(validatePlate(testPlate)).toBeTruthy();
    });
  });
  
  // Validate Date
  describe('Tests in validateDate from utils.js', () => {
    test('should return a false for a bad format date', () => {
      const testDate = '2023-15-09'; //YYYY-DD-MM
      expect(validateDate(testDate)).toBeFalsy();
    });
    
    test('should return a true for a future month and year valid date', () => {
      const futureDate = new Date();
      // Same year:
      futureDate.setMonth(futureDate.getMonth()+1);
      const formattedDate = futureDate.toISOString().split('T')[0];
      expect(validateDate(formattedDate)).toBeTruthy();
      // Next year:
      futureDate.setFullYear(futureDate.getFullYear()+1);
      expect(validateDate(formattedDate)).toBeTruthy();
    });
  
    test('should return a false for a past day', () => {
      const pastDate = new Date();
      pastDate.setUTCHours(0,0,0,0);
      pastDate.setDate(pastDate.getDate()-5);
      const formattedDate = pastDate.toISOString().split('T')[0];
      expect(validateDate(formattedDate)).toBeFalsy();
    });
  });
  
  // Validate Time
  describe('Test in validateTime from utils.js', () => {
    test('should return a true for a valid hour in a future day.', () => {
      const futureDateTime = new Date();
      // To evaluate in the future
      futureDateTime.setDate(futureDateTime.getDate()+5);
      // A random hour
      const randomHour = Math.floor(Math.random() * 24);
      futureDateTime.setHours(randomHour);
      const formattedDate = futureDateTime.toISOString().split('T')[0];
      // console.log(futureDateTime.toTimeString());
      const formattedTime = futureDateTime.toTimeString().slice(0,5);
      // console.log(formattedTime);
      expect(validateTime(formattedTime, formattedDate)).toBeTruthy();
    });
  
    test('should return a false for a past hour in the same day.', () => {
      const todayDateTime = new Date();
      todayDateTime.setHours(todayDateTime.getHours()-1);
      const formattedDate = todayDateTime.toISOString().split('T')[0];
      const formattedTime = todayDateTime.toTimeString().slice(0,5);
      expect(validateDate(formattedTime,formattedDate)).toBeFalsy();
    });
  
    test('should return a false for a bad format time (date was already test)', () => {
      const testTime = '25:67';
      const testDate = '2024-09-20';
      expect(validateTime(testTime, testDate)).toBeFalsy();
    });
  });
  