const Vehicle = require("../../src/classes/Vehicle")

// getLastDigit method
describe('Test getLastDigit, a method from Vehicle class', () => {
    test('should return the last digit', () => {
        // create new vehicle
        const car = new Vehicle('ABCD-123');
        // call method
        const lastDigit = car.getLastDigit()
        expect(lastDigit).toBe('3');
    });

    test('should trim and return the last digit', () => {
        // create new vehicle
        const airplane = new Vehicle('  WXYZ- 12548789 ');
        const lastDigit = airplane.getLastDigit()
        expect(lastDigit).toBe('9');
    })
});

describe('Test allowedToDrive, a method from Vehicle class', () => {
    // new car construction
    const car = new Vehicle('ABCD-456');
    const date = '2024-10-29';
    const time = '08:30';

    test('should be  false when rules return false', () => {
        //Simulate rules result in false
        const mockRules = {
            allow: jest.fn().mockReturnValue(false),
        }
        // Call method
        const isAllowed = car.allowedToDrive(date, time, mockRules);
        expect(isAllowed).toBeFalsy();
    })

    test('should be true when rules return true', () => {
        //Simulate rules result in false
        const mockRules = {
            allow: jest.fn().mockReturnValue(true),
        }
        // Call method
        const isAllowed = car.allowedToDrive(date, time, mockRules);
        expect(isAllowed).toBeTruthy();
    })

})


