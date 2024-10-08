// Classes
const Restriction = require('./src/classes/Restriction');
const Vehicle = require('./src/classes/Vehicle');
// Data
const UIO = require('./src/data/dataRestriction');
// Input
const { getOp, getPlate, getDate, getTime, closeReadline } = require('./src/input');


// main function
const main = async () => {
    console.log('')
    console.log('----Bienvenido a la aplicación----');
    while (true) {
        console.log('Ingrese la siguiente información para verificar si su vehículo puede circular en determinada hora y fecha:');
        try {
            // Get Information from the user
            const plate = await getPlate();
            console.log('');
            const date = await getDate();
            console.log('');
            const time = await getTime();
            console.log('');

            // Creating "Pico&Placa" restriction rules for UIO
            const rulesUIO = new Restriction(UIO.resDay, UIO.resHours);
            // Creating a new Car to evaluate the restriction in UIO
            const car = new Vehicle(plate);

            // Using the car method to see if its restricted
            const carAllowed = car.allowedToDrive(date, time, rulesUIO);
            console.log(`Su vehículo con la placa ${car.plate} ${(carAllowed) ? 'no tiene' : 'tiene'} restriccion en la fecha: ${date} a la hora: ${time}.`)
            console.log('');

        } catch (error) {
            console.error('Error:', error.message);
        }
        finally {
            const op = await getOp();
            console.log(' ');
            if (op === 'e') {
                closeReadline();
                console.log('Gracias, esperamos le haya sido de utilidad!');
                console.log('');
                break;
            };
        }
    }
}
// Run main
main();


