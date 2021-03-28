function problemOne(input) {
    let username = input.shift();
    let line = input.shift();

    while (line !== 'Sign up' && line !== undefined) {
        line = line.split(' ');
        let command = line[0];

        switch (command) {
            case 'Case':
                let mode = line[1];
                if (mode === 'upper') {
                    username = username.toLocaleUpperCase();
                } else if (mode === 'lower') {
                    username = username.toLocaleLowerCase();
                }
                console.log(username);
                break;
            case 'Reverse':
                let startIndex = Number(line[1]);
                let endIndex = Number(line[2]);
                if (startIndex >= 0 && endIndex < username.length) {
                    let second = username.substring(startIndex, endIndex + 1);
                    function reverse(str) {
                        let result = [];
                        for (let i = 0; i < str.length; i++) {
                            result.push(str[i]);
                        }
                        return result.reverse().join('');
                    }
                    console.log(reverse(second));
                }
                    break;
            case 'Replace':
                let char = line[1];
                let result = [];
                for (let i = 0; i < username.length; i++) {
                    result.push(username[i]);
                    if (username[i] === char) {
                        let newChar = '*';
                        result.splice(i, 1, newChar);
                    }
                }
                console.log(result.join(''));
                username = result.join('');
                break;
            case 'Cut':
                let substring = line[1];
                if (username.includes(substring)) {
                    let first = username.substring(0, username.indexOf(substring));
                    let cut = username.substring(username.indexOf(substring), username.indexOf(substring) + substring.length);
                    let third = username.substring(username.lastIndexOf(cut)).slice(substring.length);
                    let result = [];
                    for (let i = 0; i < username.length; i++) {
                        result.push(username[i]);
                    }
                    result.splice(username.indexOf(substring), username.indexOf(substring) + substring.length);
                    console.log(result.join('') + third);
                } else {
                    console.log(`The word ${username} doesn't contain ${substring}.`);
                }
                break;
            case 'Check':
                let symbol = line[1];
                if (username.includes(symbol)) {
                    console.log(`Valid`);
                } else {
                    console.log(`Your username must contain ${symbol}.`)
                }
                break;
        }
        line = input.shift();
    }
}

problemOne([ 'Peter', 'Case lower', 'Cut ES', 'Check @', 'Sign up' ]);
// peter
// The word peter doesn't contain ES.
// Your username must contain @.

problemOne([ 'ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up' ]);
// Isih
// Th*sIsMyStr*ng
// Th*sIsStr*ng