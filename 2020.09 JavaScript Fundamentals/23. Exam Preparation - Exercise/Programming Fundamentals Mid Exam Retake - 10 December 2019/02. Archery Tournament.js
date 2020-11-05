function archeryTournament(input) {
    let targets = input.shift().split('|').map(Number);
    let points = 0;
    let shot = 0;
    let archeryField = targets.length; // number of targets
    let targetIndex = 0;

    for (let command of input) {
        if (command === 'Game over') {
            break;
        } else {
            command = command.split('@');
            let action = command[0];

            if (action === 'Shoot Left') {
                let startIndex = Number(command[1]);
                let length = Number(command[2]);
                if (startIndex >= 0 && startIndex < archeryField) {
                    length %= archeryField;
                    let offset = archeryField - length;
                    targetIndex = (startIndex + offset) % archeryField;
                    if (targets[targetIndex] <= 5) {
                        points += targets[targetIndex];
                        shot = 0;
                    } else {
                        points += 5;
                        shot = targets[targetIndex] - 5;
                    }
                    targets.splice(targetIndex, 1, shot);
                }
            } else if (action === 'Shoot Right') {
                let startIndex = Number(command[1]);
                let length = Number(command[2]);
                if (startIndex >= 0 && startIndex < archeryField) {
                    targetIndex = (startIndex + length) % archeryField;
                    if (targets[targetIndex] <= 5) {
                        points += targets[targetIndex];
                        shot = 0;
                    } else {
                        points += 5;
                        shot = targets[targetIndex] - 5;
                    }
                    targets.splice(targetIndex, 1, shot);
                }
            } else if (action === 'Reverse') {
                targets = targets.reverse();
            }
        }
    }
    console.log(targets.join(' - '));
    console.log(`Iskren finished the archery tournament with ${points} points!`);
}

archeryTournament([     // 5 - 5 - 10 - 10 - 10
    '10|10|10|10|10',   // Iskren finished the archery tournament with 10 points!
    'Shoot Left@0@2',
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over',
    '']);

archeryTournament([     // 55 - 45 - 40 - 30 - 20
    '20|30|40|50|60',   // Iskren finished the archery tournament with 10 points!
    'Shoot Left@0@12',
    'Shoot Right@4@15',
    'Shoot Left@6@5',
    'Reverse',
    'Game over',
    '']);