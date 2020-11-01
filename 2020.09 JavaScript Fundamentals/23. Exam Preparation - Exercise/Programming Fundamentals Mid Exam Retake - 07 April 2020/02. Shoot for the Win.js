function shootForTheWin(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let targetsToShoot = arr.slice(0, -1).map(Number);

    for (let currentTarget of targetsToShoot) {
        if (targets[currentTarget] !== undefined && targets[currentTarget] !== -1) {
            let targetValue = targets[currentTarget];
            targets[currentTarget] = -1;

            targets = targets.map(e => {
                if (e === -1) {
                    return e;
                }
                if (e > targetValue) {
                    return e - targetValue;
                }
                return e + targetValue;
            });
        }
    }

    let shootTargets = targets.filter(e => e === -1).length;

    console.log(`Shot targets: ${shootTargets} -> ${targets.join(' ')}`);
}

shootForTheWin(['24 50 36 70', '0', '4', '3', '1', 'End']);         // Shot targets 3 -> -1 -1 130 -1
shootForTheWin(['30 30 12 60 54 66', '5', '2', '4', '0', 'End']);   // Shot targets: 4 -> -1 120 -1 66 -1 -1