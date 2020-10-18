function arrayManipulations(arr) {
    let startingArr = arr.shift().split(' ').map(Number);

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        let [action, num, index] = command.split(' ');
        num = Number(num);
        index = Number(index);

        if (action === 'Add') {
            startingArr.push(num); // add a number to the end of the array
        } else if (action === 'Remove') {
            startingArr = startingArr.filter(el => el !== num); // remove number from the array
        } else if (action === 'RemoveAt') {
            startingArr.splice(num, 1); // removes number at a given index
        } else if (action === 'Insert') {
            startingArr.splice(index, 0, num); // inserts a number at a given index
        }
    }
    return startingArr.map(Number).join(' ');
}

console.log(arrayManipulations( // 4 53 6 8 43 3
    ['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
));