function movingTarget(arr) {
    let targets = arr.shift().split(' ').map(Number);

    for (let command of arr) {
        if (command === 'End') {
            break;
        } else {
            let [action, index, parameter] = command.split(' ');
            index = Number(index);
            parameter = Number(parameter);

            if (action === 'Shoot') {
                if (index >= 0 && index < targets.length) {
                    let target = targets[index];
                    if (target - parameter > 0) {
                        let element = target - parameter;
                        targets.splice(index, 1, element);
                    } else {
                        targets.splice(index, 1);
                    }
                }
            } else if (action === 'Strike' && index >= 0 && index < targets.length) {
                if (index - parameter >= 0 && index + parameter < targets.length) {
                    targets.splice(index - parameter, parameter + parameter + 1);
                } else {
                    console.log(`Strike missed!`);
                }
            } else if (action === 'Add') {
                if (index < 0 || index > targets.length - 1) {
                    console.log(`Invalid placement!`);
                } else {
                    targets.splice(index, 0, parameter);
                }
            }
        }
    }
    console.log(`${targets.join('|')}`);
}

movingTarget([                  // Invalid placement!
        '52 74 23 44 96 110',   // 52|100
        'Shoot 5 10',
        'Shoot 1 80',
        'Strike 2 1',
        'Add 22 3',
        'End'
    ]);
movingTarget([                  // Strike missed!
        '47 55 85 78 99 20',    // 22|47|50|40|85|78|99|20
        'Shoot 1 55',
        'Shoot 8 15',
        'Strike 2 3',
        'Add 0 22',
        'Add 2 40',
        'Add 2 50',
        'End'
    ]);
