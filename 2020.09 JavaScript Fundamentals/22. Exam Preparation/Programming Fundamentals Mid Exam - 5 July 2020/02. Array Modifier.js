function arrayModifier(input) {
    let array = input.shift().split(' ').map(Number);
    let command = input.shift();

    while (command !== 'end') {
        command = command.split(' ');
        let action = command[0];

        if (action === 'swap') {
            // take two elements and swap their places
            let index1 = Number(command[1]);
            let index2 = Number(command[2]);
            let temp = array[index1];
            array.splice(index1, 1, array[index2]);
            array.splice(index2, 1, temp);
        } else if (action === 'multiply') {
            // take element at the 1st index and multiply it with element at 2nd index
            // save the product at the 1st index
            let index1 = Number(command[1]);
            let index2 = Number(command[2]);
            let element = array[index1] * array[index2];
            array.splice(index1, 1, element);
        } else if (action === 'decrease') {
            // decreases all elements in the array with 1
            array = array.map(x => x - 1);
        }
        command = input.shift();
    }

    console.log(array.join(', '));
}

arrayModifier([
        '23 -2 321 87 42 90 -123',
        'swap 1 3',
        'swap 3 6',
        'swap 1 0',
        'multiply 1 2',
        'multiply 2 1',
        'decrease',
        'end'
    ]);                 // 86, 7382, 2369942, -124, 41, 89, -3
arrayModifier([
        '1 2 3 4',
        'swap 0 1',
        'swap 1 2',
        'swap 2 3',
        'multiply 1 2',
        'decrease',
        'end'
    ]);                 // 1, 11, 3, 0
