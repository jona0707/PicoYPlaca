// This file is to define data about restriction on UIO
const UIO = {
    // A dictionary and an object to save restriction information.
    resDay: {
        0: [],
        1: [1,2],
        2: [3,4],
        3: [5,6],
        4: [7,8],
        5: [9,0],
        6: []
    },
    resHours: {
        morning: [7, 9.5],
        noon: [16, 19.5]
    }
}

module.exports = UIO;