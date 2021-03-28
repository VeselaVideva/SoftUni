function piccolo(input) {
    let cars = [];

    for (let carDetails of input) {
        let [direction, carNumber] = carDetails.split(', ');

        if (direction === 'IN') {
            if (!cars.includes(carNumber)){
                cars.push(carNumber);
            }
        } else if (direction === 'OUT') {
            if (cars.includes(carNumber)) {
                let index = cars.indexOf(carNumber);
                cars.splice(index, 1);
            }
        }
    }

    if (cars.length > 0) {
        let sorted = cars.sort();
        for (let carNum of sorted) {
            console.log(carNum);
        }
    } else {
        console.log('Parking Lot is Empty');
    }
}

piccolo(['IN, CA2844AA',
         'IN, CA1234TA',
         'OUT, CA2844AA',
         'IN, CA9999TT',
         'IN, CA2866HI',
         'OUT, CA1234TA',
         'IN, CA2844AA',
         'OUT, CA2866HI',
         'IN, CA9876HH',
         'IN, CA2822UU']);
// CA2822UU
// CA2844AA
// CA9876HH
// CA9999TT

piccolo(['IN, CA2844AA',
         'IN, CA1234TA',
         'OUT, CA2844AA',
         'OUT, CA1234TA']);
// Parking Lot is Empty