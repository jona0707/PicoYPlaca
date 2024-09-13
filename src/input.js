// ReadLine to manage de inputs
const readline = require('readline');
// Validate (from utils)
const { validateDate, validateTime, validatePlate } = require('./utils/validate');

// Readline's interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to askQuery to use later for date and time (return a promise)
const askQuery = (query) => {
    return new Promise(resolve => rl.question(query, resolve));
};

let plate = '';
let date = '';
let time = '';

// Menu 
const getOp= async () => {
    let op = await askQuery('Presione cualquier tecla para volver a verificar, presione la letra e para salir: ');
    return op;
};


// Ask plate
const getPlate = async () => {
    plate = await askQuery('Ingrese la placa de su vehículo (mínimo 7 caracteres y terminar en número): ');
    while (!validatePlate(plate)) {
        console.log('Placa inválida, debe tener mínimo 7 caracteres y terminar en número.');
        plate = await askQuery('Ingrese una placa adecuada: ');
    }
    return plate;
};

// Ask date 
const getDate = async () => {
    date = await askQuery('Ingrese la fecha (AAAA-MM-DD, ej: 2024-09-13): ');
    // Validate Date
    while (!validateDate(date)) {
        console.log('Fecha inválida, su fecha debe ser futura y estar en formato AAAA-MM-DD, ej: 2024-09-13.');
        date = await askQuery('Por favor, ingresa una fecha adecuada:');
    }
    return date;
}

// Ask time 
const getTime = async () => {
    time = await askQuery('Ingrese la hora (HH:MM, ej: 05:25): ')
    while (!validateTime(time, date)) {
        console.log('Hora inválida, su hora debe ser futura y estar en formato HH:MM, ej: 16:25. ');
        time = await askQuery('Por favor, ingresa una hora en formato adecuado: ');
    }
    return time;
};

const closeReadline = () => {
    rl.close();
};


module.exports = {getOp, getPlate, getDate, getTime, closeReadline};