function kartRankList(input) {
    let index = 0;
    let command = input[index];

    let cardGold = 0;
    let cardSilver = 0;
    let cardBronze = 0;
    let minNum = Number.MAX_SAFE_INTEGER;
    let isWinner = "";

    while (command !== "Finish") {
        let name = command;
        index++;
        let minutes = Number(input[index]);
        index++;
        let seconds = Number(input[index]);
        index++;

        let totalSeconds = (minutes * 60) + seconds;
        if (totalSeconds < 55) {
            cardGold += 1;
        } else if (totalSeconds >= 55 && totalSeconds <= 85) {
            cardSilver++;
        } else if (totalSeconds >= 85 && totalSeconds <= 120) {
            cardBronze++;
        }
        if (totalSeconds < minNum) {
            minNum = totalSeconds;
            isWinner = `${name}`;
        }
        command = input[index];
    }

    let m = Math.floor(minNum / 60);
    let s = minNum % 60;

    console.log(`With ${m} minutes and ${s} seconds ${isWinner} is the winner of the day!`);
    console.log(`Today's prizes are ${cardGold} Gold ${cardSilver} Silver and ${cardBronze} Bronze cards!`);
}

kartRankList(['Peter', '1', '20', 'George', '1', '45', 'Maria', '2', '10', 'Alexander', '0', '52', 'Finish']);
kartRankList(['Nick', '3', '20', 'Jack', '2', '45', 'Sofia', '4', '10', 'Viktor', '2', '52', 'Finish']);
kartRankList(['Nick', '3', '20', 'Jack', '1', '15', 'Sofia', '4', '10', 'Viktor', '2', '52', 'Finish']);