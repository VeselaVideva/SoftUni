function tournamentOfChristmas(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;

    let totalWins = 0;
    let totalLoses = 0;
    let totalMoney = 0;

    for (let day = 1; day <= days; day++) {
        let command = input[index];
        index++;

        let wins = 0;
        let loses = 0;
        let dayMoney = 0;

        while (command !== "Finish") {
            let sport = command;
            let result = input[index];
            index++;
            if (result === "win") {
                wins += 1;
                dayMoney += 20;
            } else {
                loses += 1;
            }
            command = input[index];
            index++;
        }
        if (wins > loses) {
            dayMoney *= 1.10;
            totalWins++;
        } else {
            totalLoses++;
        }
        totalMoney += dayMoney;
    }
    if (totalWins > totalLoses) {
        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}

tournamentOfChristmas(['2',
    'volleyball', 'win', 'football', 'lose', 'basketball', 'win', 'Finish',
    'golf', 'win', 'tennis', 'win', 'badminton', 'win', 'Finish']);
tournamentOfChristmas(['3',
    'darts', 'lose', 'handball', 'lose', 'judo', 'win', 'Finish',
    'snooker', 'lose', 'swimming', 'lose', 'squash', 'lose', 'table tennis', 'win', 'Finish',
    'volleyball', 'win', 'basketball', 'win', 'Finish']);