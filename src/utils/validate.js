const isBetween = require("./isBetween");

// To compare future date:
const now = new Date();
const nowYear = now.getFullYear();
const nowMonth = now.getMonth() + 1;
const nowDay = now.getDate();
const nowHour = now.getHours();
const nowMinute = now.getMinutes();

const validatePlate = (plate) => {
    // First, we check the length
    const inPlate = plate.trim();
    if(inPlate.length < 7) return false;
    // Check if the plate is valid (ends with number) with denial isNaN
    if(isNaN(inPlate.slice(-1))) return false;
    return true;
}


// Validate date format, we need to predict so date have to be future, and it needs to have the correct format (YYYY-MM-DD)
const validateDate = (date) => {
    // Regular expression to verify the format (^-$), if it is not, I send a false:
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(date)) return false;

    // Destructuring date
    const [year, month, day] = date.split('-').map(x => parseInt(x));

    // Verify if the date could exist (for example feb 30 can't)
    const tryDate = new Date(year, month - 1, day);
    // If the date is wrong, Date would try to modify it to work
    const tryYear = tryDate.getFullYear();
    const tryMonth = tryDate.getMonth() + 1;
    const tryDay = tryDate.getDate();
    if (year !== tryYear || month !== tryMonth || day !== tryDay) return false;

    // Any next year date is valid
    if (year > nowYear) return true;

    // This year
    if (year == nowYear && isBetween(month, nowMonth, 12) && isBetween(day, nowDay, 31)) return true;
    return false;
}

// Validate time format and predict that is in the future, the format is HH:MM
const validateTime = (time, date) => {
    // Regular expression to verify the format (^-$), if it is not, I send a false:
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!regex.test(time)) return false;
    // Destructuring time
    const [inputHour, inputMin] = time.split(':').map(x => parseInt(x));
    const inputDate = new Date(date);
    if (inputDate > now) return true;
    if (isBetween(inputHour, nowHour, 23) && isBetween(inputMin, nowMinute - 1, 59)) return true;
    return false;
}


module.exports = { validatePlate, validateDate, validateTime}