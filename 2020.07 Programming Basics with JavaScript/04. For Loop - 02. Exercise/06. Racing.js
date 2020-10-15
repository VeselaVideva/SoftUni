function racing(arg1, arg2, arg3) {
    let totalFuel = Number(arg1);
    let fuelForFirstRound = Number(arg2);
    let rounds = Number(arg3);

    // round 1
    let totalRounds = 1;
    let fuelLeft = totalFuel - fuelForFirstRound;

    // from round 2
    for (let i = 2; i <= rounds; i++) {
        fuelLeft += 0.1;
        fuelLeft -= fuelForFirstRound;
        if (fuelLeft > 0) {
            totalRounds += 1;
        }
    }

    if (fuelLeft > 0) {
        console.log(`Congrats! You won the race!`);
    } else {
        console.log(`You are out of fuel in round ${totalRounds}!`);
    }
}

racing("70", "6.5", "10");
racing("50", "4.3", "30");