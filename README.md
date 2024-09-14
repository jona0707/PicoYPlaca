# Pico y Placa Predictor

This application predicts if a vehicle is allowed to be on the road, according to `Pico y Placa` rules. The user input will include the plate, the date and the hour to check if the car is allowed.

### Tools Used in This Project
- JavaScript
- Node.js
- Jest

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [How to Use](#how-to-use)
- [Tests](#tests)

## Installation

To install and run the project, you need to have Node.js and npm installed. If you don't have them, you can download and install them from [Node.js official website](https://nodejs.org/).

Once you have Node.js and npm installed, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/jona0707/PicoYPlaca.git
    cd PicoYPlaca
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the application:

    ```bash
    node index.js
    ```

## Project Structure

```bash
├── __tests__         # Unit tests
│   ├── Restriction.test.js
│   ├── Vehicle.test.js
│   ├── isBetween.test.js
│   ├── validate.test.js
│   └── input.test.js
├── src               # Source code
│   ├── classes
│   │   ├── Restriction.js      # Class that defines traffic restrictions
│   │   └── Vehicle.js          # Class that defines the vehicle
│   ├── data
│   │   └── dataRestriction.js  # Restriction data for Quito (UIO).
│   ├── utils
│   │   ├── isBetween.js        # To check if a number is between other two.
│   │   └── validate.js         # To validate plate, date and time.
│   └── input.js                # User input handling.
├── index.js          # Main application file.
├── package.json      # Project information and dependencies. 
└── README.md         # This documentation.
```
You may have some other files after the installation, but those are related to the develop of the project.

## How to Use
To use the application, you can run the following command:
```bash
node index.js
```
This will start the project, then you need to add your plate, date and time that you need to check. Since this application is intended for users in Quito, it is in spanish:
```bash
----Bienvenido a la aplicación----
Ingrese la siguiente información para verificar si su vehículo puede circular en determinada hora y fecha:
Ingrese la placa de su vehículo (mínimo 7 caracteres y terminar en número): PBL7614
Ingrese la fecha (AAAA-MM-DD, ej: 2024-09-13): 2024-09-17
Ingrese la hora en formato 24 horas (HH:MM, ej: 17:25): 07:30
Su vehículo con la placa PBL7614 tiene restriccion en la fecha: 2024-09-17 a la hora: 07:30.
```
Plate: `PBL7614` \
Date: `2024-09-17`\
Time: `07:30`

As `Pico y Placa` defines that a vehicle with a plate ending in `3 or 4` can't drive on Tuesday from `7:00 to 9:30` and `16:00 to 19:30`, then the applications alerts the user that the vehicle is restricted to go on the road.

Then, the application will ask you if you want to end (by entering an `e`) or you want to check again (by entering `anything else`).

## Tests
This project includes unit tests, you can run them using the following command:
```bash
npm test
```
Then you'll see only the number and results of tests, but if you want to see what are the specific tests, you can use:
```bash
npm run test-detail
```

### Credits
- **Project Creator**: Jona Puente.


