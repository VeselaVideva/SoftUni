function counterStrike(arr) {
    let energy = Number(arr.shift());           // energy => integer [1-10000]
    let index = 0;
    let won = 0;

    while (energy >= 0) {
        let distance = arr[index++];            // distance => integer [1-10000]

        if (distance === 'End of battle'){
            break;
        } else {
            distance = Number(distance);
        }

        if (energy >= distance){
            won++;
            energy -= distance;
        } else {
            console.log(`Not enough energy! Game ends with ${won} won battles and ${energy} energy`);
            return;
        }

        if (won % 3 === 0){
            energy += won;
        }
    }

    console.log(`Won battles: ${won}. Energy left: ${energy}`);
}

counterStrike(['100', '10', '10', '10', '1', '2', '3', '73', '10']); // Not enough energy! Game ends with 7 won battles and 0 energy
counterStrike(['200', '54', '14', '28', '13', 'End of battle']);     // Won battles: 4. Energy left: 94