function carFactory(car) {
    let newCar = {};
    newCar.model = car.model;
    newCar.engine = {power: 0, volume: 0};

    if (car.power <= 90) {
        newCar.engine.power = 90;
        newCar.engine.volume = 1800;
    } else if (car.power > 90 && car.power <= 120) {
        newCar.engine.power = 120;
        newCar.engine.volume = 2400;
    } else if (car.power > 120) {
        newCar.engine.power = 200;
        newCar.engine.volume = 3500;
    }

    newCar.carriage = {
        type: car.carriage,
        color: car.color
    }

    if (car.wheelsize % 2 === 0) {
        car.wheelsize -= 1;
    }

    newCar.wheels = Array(4).fill(car.wheelsize, 0, 4);

    return newCar;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }));
// { model: 'VW Golf II',
//   engine: { power: 90,
//             volume: 1800 },
//   carriage: { type: 'hatchback',
//               color: 'blue' },
//   wheels: [13, 13, 13, 13] }
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }));
// { model: 'Opel Vectra',
//   engine: { power: 120,
//             volume: 2400 },
//   carriage: { type: 'coupe',
//               color: 'grey' },
//   wheels: [17, 17, 17, 17] }