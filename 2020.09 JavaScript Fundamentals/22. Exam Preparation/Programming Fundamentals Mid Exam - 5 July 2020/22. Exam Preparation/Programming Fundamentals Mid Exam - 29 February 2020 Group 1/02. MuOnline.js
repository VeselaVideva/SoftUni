function muOnline(input) {
    let health = 100;
    let bitcoins = 0;

    let rooms = input.split('|');
    let roomCount = 0;

    for (let room of rooms) {
        roomCount++;
        let [command, number] = room.split(' ');
        number = Number(number);

        if (command === 'potion') {
            health += number;
            if (health > 100) {
                number = 100 - (health - number);
                health = 100;
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);
        } else {
            let monster = command;
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${roomCount}`);
                break;
            }
        }
    }
    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
// You slayed rat.
// You slayed bat.
// You healed for 10 hp.
// Current health: 80 hp.
// You slayed rat.
// You found 100 bitcoins.
// You died! Killed by boss.
// Best room: 6

muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');
// You slayed cat.
// You healed for 10 hp.
// Current health: 100 hp.
// You slayed orc.
// You found 10 bitcoins.
// You slayed snake.
// You found 110 bitcoins.
// You've made it!
// Bitcoins: 120
// Health: 65