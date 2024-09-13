// Restrictions have methods to evaluate if the car could drive or not, depending on a datetime and car's "placa".
class Restriction {
    constructor(resDays, resHours) {
        // We could use this to other "Pico&Placa" rule.
        this.resDays = resDays;
        this.resHours = resHours;
    }

    allow(lastDigit, date, time) {
        // Get Day will return us the number of the day: Sunday -> 0 n' Saturday -> 6
        const day = new Date(date).getDay();
        // If the car is not in a restricted day:
        if(!this.resDays[day].includes(lastDigit)) return true;
        // If the car is in a restricted day but in a good hour:
        if(this.checkHour(time)) return true;
        // If the car is in a restricted day and in a restricted hour:
        return false;
    }

    checkHour(time) {
        const [hour, min] = time.split(':').map(x => parseInt(x));
        const timeNow = hour + (min/60);
        const [morningMax, morningMin] = this.resHours.morning;
        const [noonMax, noonMin] = this.resHours.noon;
        // If the car is at a bad time, it is going to return a false.
        if (isBetween(timeNow, morningMin, morningMax) || isBetween(timeNow, noonMin, noonMax )) return false;
        return true;        
    }
}

const isBetween = (x, min, max) => (x >= min && x <= max);

module.exports = Restriction;

