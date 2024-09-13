const Restriction = require("../../src/classes/Restriction");
const UIO = require("../../src/data/dataRestriction");

// General restriction to UIO
const restriction = new Restriction(UIO.resDay, UIO.resHours);

// Allow
describe('Test allow, a method of Restriction class', () => {
    test('should return true because the car is not restricted', () => {
        // Monday: 1,2 - Tuesday: 3,4 - Wednesday: 5,6 - Thursday: 7,8 - Friday: 9,0
        // 2024-09-18 is Wednsday !== 4
        const isAllow = restriction.allow('4', '2024-09-18','07:30');
        // console.log(isAllow);
        expect(isAllow).toBeTruthy();
    });
    
    test('should return false because the car is restricted', () => {
        // 2024-09-18 is Wednsday == 5
        const isAllow = restriction.allow('5', '2024-09-18','07:35');
        expect(isAllow).toBeFalsy();
    });
    
    test('should return true because the car is not restricted because of the hour', () => {
        // 2024-09-18 is Wednsday == 5
        const isAllow = restriction.allow('5', '2024-09-18','06:30');
        expect(isAllow).toBeTruthy();
    });
});

// CheckHour
describe('Test checkHour, a method of Restriction class', () => {
    test('should return true because hour is allowed', () => {
      const before = restriction.checkHour('06:30');
      const between = restriction.checkHour('11:00');
      const after = restriction.checkHour('23:00');
      // Expect true because all are allowed.
      expect(before).toBeTruthy();
      expect(between).toBeTruthy();
      expect(after).toBeTruthy();
    });
    
    test('should return false because hour is not allowed', () => {
        const morning = restriction.checkHour('8:30');
        const noon = restriction.checkHour('17:00');
        // Expect false because all are not allowed.
        expect(morning).toBeFalsy();
        expect(noon).toBeFalsy();
    })
    
    
});

