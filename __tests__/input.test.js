const { getOp, getPlate, getDate, getTime, closeReadline } = require('../src/input');

// New global readline based in my arbitrary responses.
jest.mock('readline', () => {
    // Define the closeMock to get it.
    const closeMock = jest.fn();
    return {
        // createInterface is a readline method, so we need this function here.
        createInterface: () => ({
            // Simulate the return of the fuction using a function: question, that is a method of readline.createinterface.
            question: jest.fn((query, callback) => {
                // Simulate response with an object
                const response = {
                    'Ingrese la placa de su vehículo (mínimo 7 caracteres y terminar en número): ': 'ABC-1234',
                    'Ingrese la fecha (AAAA-MM-DD, ej: 2024-09-13): ': '2024-09-20',
                    'Ingrese la hora en formato 24 horas (HH:MM, ej: 17:25): ': '12:00',
                    'Presione cualquier tecla para volver a verificar, presione la letra e para salir: ': 'e'
                };
                // To return correctly the info to the promise, when I call the question method, it return response depending on the query.
                callback(response[query] || '');
            }),
            // Simulate a close function.
            close: closeMock,
        })
    };
});

describe('Input functions in input.js', () => {
    // Check if the input plate was valid
    test('should return the plate validated', async () => {
        const plate = await getPlate();
        expect(plate).toBe('ABC-1234');
    });

    // Check if the input date was valid
    test('should return the date validated', async () => {
        const date = await getDate();
        expect(date).toBe('2024-09-20');
    });

    // Check if the time was valid
    test('should return the time validated', async () => {
        const time = await getTime();
        expect(time).toBe('12:00');
    });
    // Check if it return an 'e'
    test('should return "e" when user chooses too exit', async () => {
        const op = await getOp();
        expect(op).toBe('e');
    });
    test('should execute the close function when I called closeReadline', () => {
        // Call the function to close rl (readline.createInterface)
        closeReadline();
        // Obtain readline (to test, is our mock)
        const readline = require('readline');
        // Verify if it was called.
        expect(readline.createInterface().close).toHaveBeenCalled();
    });
});
