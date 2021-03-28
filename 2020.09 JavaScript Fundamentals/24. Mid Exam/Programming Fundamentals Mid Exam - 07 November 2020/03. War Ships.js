function warShips(input) { // 85/100 (test 8)
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift());
    let countOfSectionsForRepair = 0;
    let hasWinner = false;

    for (let command of input) {
        if (command === 'Retire' || command === undefined) {
            break;
        } else {
            command = command.split(' ');

            if (command[0] === 'Fire') { // changes on warShip
                let index = Number(command[1]);
                let damage = Number(command[2]);
                if (index >= 0 && index < warShip.length) { // check if the index is valid
                    let targetSection = warShip[index];
                    let damagedSection = targetSection - damage;
                    if (damagedSection <= 0) { // the warship sinks
                        hasWinner = true;
                        console.log(`You won! The enemy ship has sunken.`);
                        break;
                    } else {
                        warShip.splice(index, 1, damagedSection);
                    }
                }

            } else if (command[0] === 'Defend') { // changes on pirateShip
                let startIndex = Number(command[1]);
                let endIndex = Number(command[2]);
                let damage = Number(command[3]);
                if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) { // check if both indices are valid
                    for (let i = startIndex; i <= endIndex; i++) {
                        let targetSection = pirateShip[i];
                        let damagedSection = targetSection - damage;
                        if (damagedSection <= 0) { // the pirateShip sinks
                            hasWinner = true;
                            console.log(`You lost! The pirate ship has sunken.`);
                            break;
                        } else {
                            pirateShip.splice(i, 1, damagedSection);
                        }
                    }
                }

            } else if (command[0] === 'Repair') { // repairs on pirateShip
                let index = Number(command[1]);
                let health = Number(command[2]);
                if (index >= 0 && index < pirateShip.length) { // check if the index is valid
                    let targetSection = pirateShip[index];
                    if (targetSection + health <= maxHealth) {
                        let repairedSection = targetSection + health;
                        pirateShip.splice(index, 1, repairedSection);
                    } else {
                        pirateShip.splice(index, 1, maxHealth);
                    }
                }

            } else if (command[0] === 'Status') { // prints the status of the pirateShip
                let lowerThan = maxHealth * 0.20; // lower than 20% of the maximum health capacity
                for (let i = 0; i < pirateShip.length; i++) {
                    if (pirateShip[i] < lowerThan) {
                        countOfSectionsForRepair++;
                    }
                }
                if (countOfSectionsForRepair > 0) {
                    console.log(`${countOfSectionsForRepair} sections need repair.`);
                }
            }
        }

        if (hasWinner) { // Maybe this is Test 8, double Defend command!
            break;
        }
    }

    if (!hasWinner) {
        let pirateShipStatus = pirateShip.reduce((a, b) => a + b, 0);
        let warShipStatus = warShip.reduce((a, b) => a + b, 0);
        console.log(`Pirate ship status: ${pirateShipStatus}`);
        console.log(`Warship status: ${warShipStatus}`);
    }
}

warShips([
    '1>1>1>1>1',
    '1>1>1>1>1>1>1',
    '1',
    'Status',
    'Fire -20 1',
    'Fire -20 1',
    'Defend 2 3 1',
    'Defend 2 3 1',
    'Repair 2 1',
    'Repair 3 1',
    'Status',
    'Retire'
]);

/*warShips([
        '2>3>4>5>6',
        '2>3>4>5>6>10>11',
        '15',
        'Fire -1 22',
        'Fire 22 44',
        'Fire 1 1',
        'Retire'
    ]);
// Pirate ship status: 20
// Warship status: 40

warShips([
        '2>3>4>5>2',
        '6>7>8>9>10>11',
        '20',
        'Status',
        'Fire 2 3',
        'Defend 0 4 11',
        'Repair 3 18',
        'Retire'
    ]);*/
// 3 sections need repair.
// You lost! The pirate ship has sunken.