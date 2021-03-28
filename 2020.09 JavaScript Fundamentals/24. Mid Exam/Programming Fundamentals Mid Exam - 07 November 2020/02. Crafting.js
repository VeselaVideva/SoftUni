function crafting(input) {
    let weapon = input.shift().split('|');
    let outputEven = [];
    let outputOdd = [];

    for (let command of input) {
        if (command === 'Done' || command === undefined) {
            break;
        } else {
            command = command.split(' ');

            if (command[1] === 'Left') {
                let index = Number(command[2]);
                if (index >= 0 && index < weapon.length) { // if the index exist
                    let index1 = index;
                    let index2 = index - 1;
                    if (index2 >= 0 && index2 < weapon.length) { // if the move is possible
                        let temp = weapon[index1];
                        weapon.splice(index1, 1, weapon[index2]);
                        weapon.splice(index2, 1, temp);
                    }
                }

            } else if (command[1] === 'Right') {
                let index = Number(command[2]);
                if (index >= 0 && index < weapon.length) { // if the index exist
                    let index1 = index;
                    let index2 = index + 1;
                    if (index2 >= 0 && index2 < weapon.length) { // if the move is possible
                        let temp = weapon[index1];
                        weapon.splice(index1, 1, weapon[index2]);
                        weapon.splice(index2, 1, temp);
                    }
                }

            } else if (command[0] === 'Check') {
                if (command[1] === 'Even') {
                    for (let i = 0; i < weapon.length; i++) {
                        if (i % 2 === 0) {
                            outputEven.push(weapon[i]);
                        }
                    }
                }
                if (command[1] === 'Odd') {
                    for (let i = 0; i < weapon.length; i++) {
                        if (i % 2 !== 0) {
                            outputOdd.push(weapon[i]);
                        }
                    }
                }
            }
        }
    }

    if (outputEven.length > 0) {
        console.log(outputEven.join(' '));
    }
    if (outputOdd.length > 0) {
        console.log(outputOdd.join(' '));
    }
    console.log(`You crafted ${weapon.join('')}!`);
}

crafting(
    ['ha|Do|mm|om|er',
      'Move Right 0',
      'Move Left 3',
      'Check Odd',
      'Move Left 2',
      'Move Left 10',
      'Move Left 0',
      'Done'
    ]);
// ha mm
// You crafted Doomhammer!

crafting(
    ['ri|As|er|hb|ng',
      'Move Left 1',
      'Move Right 2',
      'Move Right 3',
      'Move Left 2',
      'Done'
    ]);
// You crafted Ashbringer!

crafting(
    ['Ve|or|nd|st|ke|ri',
     'Check Even',
     'Move Right 5',
     'Move Left 2',
     'Move Left 0',
     'Move Right 4',
     'Done'
    ]);
// Ve nd ke
// You crafted Vendorstrike!
