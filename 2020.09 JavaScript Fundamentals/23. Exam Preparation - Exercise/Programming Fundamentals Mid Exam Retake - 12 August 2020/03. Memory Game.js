function memoryGame(arr) {
    let sequence = arr.shift().split(' ');
    let move = arr.shift();
    let moves = 0;

    while (move !== 'end') {
        moves++;
        let [x, y] = move.split(' ').map(Number);

        if (x === y || x < 0 || y < 0 || x >= sequence.length || y >= sequence.length) {
            let element = `-${moves}a`;
            sequence.splice(sequence.length / 2, 0, element, element);
            console.log(`Invalid input! Adding additional elements to the board`);
            move = arr.shift();
            continue;
        }

        if ( sequence[x] === sequence[y]) {
            let element = sequence[x]; //'a'
            sequence.splice(x, 1);// тук се променя броят на елементите в масива... у вече е различен
            let index = sequence.indexOf(element);
            sequence.splice(index, 1);
            console.log(`Congrats! You have found matching elements - ${element}!`);
        } else {
            console.log(`Try again!`);
        }

        if (sequence.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }

        move = arr.shift();
    }

    if (sequence.length > 0) {
        console.log(`Sorry you lose :(\n${sequence.join(' ')}`);
    }
}

memoryGame([                    // Congrats! You have found matching elements - 1!
        "1 1 2 2 3 3 4 4 5 5",  // Invalid input! Adding additional elements to the board
        "1 0",                  // Congrats! You have found matching elements - 2!
        "-1 0",                 // Congrats! You have found matching elements - 3!
        "1 0",                  // Congrats! You have found matching elements - -1a!
        "1 0",                  // Sorry you lose :(
        "1 0",                  // 4 4 5 5
        "end"
    ]);
memoryGame([                    // Congrats! You have found matching elements - a!
        "a 2 4 a 2 4",          // Congrats! You have found matching elements - 2!
        "0 3",                  // Congrats! You have found matching elements - 4!
        "0 2",                  // You have won in 3 turns!
        "0 1",
        "0 1",
        "end"
    ]);
memoryGame([                    // Try again!
        "a 2 4 a 2 4",          // Try again!
        "4 0",                  // Try again!
        "0 2",                  // Try again!
        "0 1",                  // Sorry you lose :(
        "0 1",                  // a 2 4 a 2 4
        "end"
    ]);