function needForSpeed(input) {
    let actions = {
        Drive(cars, carName, distance, fuel) {
            let car = cars[carName];
            if (Number(fuel) > car.fuel) {
                console.log(`Not enough fuel to make that ride`);
            } else {
                car.mileage += Number(distance);
                car.fuel -= Number(fuel);
                console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }
            if (car.mileage > 100000) {
                console.log(`Time to sell the ${carName}!`);
                delete cars[carName];
            }
        },
        Refuel(cars, carName, fuel) {
            let car = cars[carName];
            if (car.fuel + Number(fuel) < 75) {
                car.fuel += Number(fuel);
            } else {
                fuel = 75 - car.fuel;
                car.fuel = 75;
            }
            console.log(`${carName} refueled with ${fuel} liters`);
        },
        Revert(cars, carName, kilometers) {
            let car = cars[carName];
            car.mileage -= Number(kilometers);
            if (car.mileage < 10000) {
                car.mileage = 10000;
            } else {
                console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
            }
        }
    };

    let numberOfCars = input.shift();
    let cars = {};

    for (let i = 0; i < numberOfCars; i++) {
        let [carName, mileage, fuel] = input.shift().split('|');
        [mileage, fuel] = [Number(mileage), Number(fuel)];
        if (!cars.hasOwnProperty(carName)) { // if car doesn't exist
            cars[carName] = {mileage: 0, fuel: 0};
        }
        cars[carName].mileage = mileage;
        cars[carName].fuel = fuel;
    }

    let line;
    while ((line = input.shift()) !== 'Stop') {
        let [actionName, carName, ...params] = line.split(' : ');
        let action = actions[actionName];
        action(cars, carName, ...params);
    }

    let sorted = Object.entries(cars).sort(compareCars);

    function compareCars(a, b) { // sort cars by mileage in descending order, then by name in ascending order
        return b[1].mileage - a[1].mileage || a[0].localeCompare(b[0]);
    }

    for (let car of sorted) {
        console.log(`${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`)
    }
}

needForSpeed(['3',
        'Audi A6|38000|62',
        'Mercedes CLS|11000|35',
        'Volkswagen Passat CC|45678|5',
        'Drive : Audi A6 : 543 : 47',
        'Drive : Mercedes CLS : 94 : 11',
        'Drive : Volkswagen Passat CC : 69 : 8',
        'Refuel : Audi A6 : 50',
        'Revert : Mercedes CLS : 500',
        'Revert : Audi A6 : 30000',
        'Stop']);
// Audi A6 driven for 543 kilometers. 47 liters of fuel consumed.
// Mercedes CLS driven for 94 kilometers. 11 liters of fuel consumed.
// Not enough fuel to make that ride
// Audi A6 refueled with 50 liters
// Mercedes CLS mileage decreased by 500 kilometers
// Volkswagen Passat CC -> Mileage: 45678 kms, Fuel in the tank: 5 lt.
// Mercedes CLS -> Mileage: 10594 kms, Fuel in the tank: 24 lt.
// Audi A6 -> Mileage: 10000 kms, Fuel in the tank: 65 lt.

needForSpeed(['4',
        'Lamborghini Veneno|11111|74',
        'Bugatti Veyron|12345|67',
        'Koenigsegg CCXR|67890|12',
        'Aston Martin Valkryie|99900|50',
        'Drive : Koenigsegg CCXR : 382 : 82',
        'Drive : Aston Martin Valkryie : 99 : 23',
        'Drive : Aston Martin Valkryie : 2 : 1',
        'Refuel : Lamborghini Veneno : 40',
        'Revert : Bugatti Veyron : 2000',
        'Stop']);
// Not enough fuel to make that ride
// Aston Martin Valkryie driven for 99 kilometers. 23 liters of fuel consumed.
// Aston Martin Valkryie driven for 2 kilometers. 1 liters of fuel consumed.
// Time to sell the Aston Martin Valkryie!
// Lamborghini Veneno refueled with 1 liters
// Bugatti Veyron mileage decreased by 2000 kilometers
// Koenigsegg CCXR -> Mileage: 67890 kms, Fuel in the tank: 12 lt.
// Lamborghini Veneno -> Mileage: 11111 kms, Fuel in the tank: 75 lt.
// Bugatti Veyron -> Mileage: 10345 kms, Fuel in the tank: 67 lt.