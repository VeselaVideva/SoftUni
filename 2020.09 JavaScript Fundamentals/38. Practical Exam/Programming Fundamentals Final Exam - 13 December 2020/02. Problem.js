function problemTwo(input) {
    let pattern = /!(?<command>[A-Z][a-z]{2,})!\:\[(?<message>[A-Za-z]{7,})\]/g

    let commands = input.shift();
    commands = Number(commands);
    let result = '';

    for (let line of input) {
        let match = line.match(pattern);

        if (match !== null) {
            match = pattern.exec(line);
            let message = match.groups.message;
            result += `${match.groups.command}: `;

            for (let i = 0; i < message.length; i++) {
                let value = message.charCodeAt(i);
                result += value + ' ';
            }
            console.log(result);
        } else {
            console.log(`The message is invalid`);
        }

    }
}

problemTwo([ '2',
            '!Send!:[IvanisHere]',
            '*Time@:[Itis5amAlready]' ]);
// Send: 73 118 97 110 105 115 72 101 114 101
// The message is invalid

problemTwo(['3',
        'go:[outside]',
        '!drive!:YourCarToACarWash',
        '!Watch!:[LordofTheRings]'
    ]);
// The message is invalid
// The message is invalid
// Watch: 76 111 114 100 111 102 84 104 101 82 105 110 103 115

problemTwo(['3',
        '!play!:[TheNewSong]',
        '!Ride!:[Bike]',
        '!Watch!:[LordofTheRings]']);
// The message is invalid
// The message is invalid
// Watch: 76 111 114 100 111 102 84 104 101 82 105 110 103 115