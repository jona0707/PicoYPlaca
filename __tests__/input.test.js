const { deserialize } = require('v8');
const { getOp, getPlate, getDate, getTime, closeReadline } = require('../src/input');
const readline = require('readline');

// To test an especific case with some inputs.
// readline 
jest.mock("readline", () => {
    return {
        createInterface: () => ({
            // Callback simulates he resolve.
            question: jest.fn((query, callback) => {
                const responses = {
                    'Ingrese la placa de su vehículo (mínimo 7 caracteres y terminar en número): ': 'ABC-1234',
                    'Ingrese la fecha (AAAA-MM-DD, ej: 2024-09-13): ': '2024-09-20',
                    'Ingrese la hora (HH:MM, ej: 05:25): ': '12:30',
                    'Presione cualquier tecla para volver a verificar, presione la letra e para salir: ': 'e'
                };
                callback(responses[query]||'');
            }),
        })
    };
});

describe('Input functions in input.js', () => {
    // Check if it return an 'e'
    test('should return "e" when user chooses too exit', async () => {
        const op = await getOp();
        expect(op).toBe('e');
    });

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
      expect(time).toBe('12:30');
    });    
});
