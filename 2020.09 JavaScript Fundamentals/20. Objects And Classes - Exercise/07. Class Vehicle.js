function classVehicle() {

    class Vehicle {
        constructor(type, model, parts = {}, fuel) {
            this.type = type;
            this.model = model;
            this.parts = {
                engine: 0,
                power: 0,
                quality: parts.engine * parts.power
            };
            this.fuel = fuel;
            this.drive = (x) => {
                this.fuel -= x;
            }
        }
    }

    let parts = { engine: 6, power: 100 };
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);

    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);
}

classVehicle();


