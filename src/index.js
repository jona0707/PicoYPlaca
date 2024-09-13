// Classes
const Car = require('./Car')
const Restriction = require('./Restriction')
// Data
const UIO = require('./dataRestriction');

// Creating "Pico&Placa" restriction rules for UIO
const rulesUIO = new Restriction(UIO.resDay, UIO.resHours);
// Creating a new Car to evaluate the restriction in UIO
const car = new Car('PBL7612');
const date = '2024-09-12';
const time = '17:20'

// Using the car method to see if its restricted
const carAllowed = car.allowedToDrive(date, time, rulesUIO);

console.log(`Car with plate ${car.plate} ${(carAllowed) ? 'can' : 'can\'t'} drive right now.`)