// Vehicle have a "Placa" = plate, to evaluate it last number and also to see if the Vehicle could drive on an especific moment.
class Vehicle{
    constructor(plate) {
        this.plate = plate;
    }

    getLastDigit() {
        const lastDigit = this.plate.trim().slice(-1);
        return lastDigit;
    }

    allowedToDrive(date, time, rulesUIO) {
        return rulesUIO.allow(this.getLastDigit(), date, time);
    }
}

module.exports = Vehicle;