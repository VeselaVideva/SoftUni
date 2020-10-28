function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift()); // max capacity of each wagon

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');

        if (command[0] === 'Add') {
            let passengers = Number(command[1]);
            wagons.push(passengers);
        } else {
            let passengers = Number(command[0]);
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + passengers <= capacity) {
                    wagons[j] += passengers;
                    break;
                }
            }
        }
    }
    return wagons.join(' ');
}

console.log(train(          // 72 54 21 12 4 75 23 10 0
    ['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
));

console.log(train(          // 10 10 10 10 10 10 10
    ['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
));