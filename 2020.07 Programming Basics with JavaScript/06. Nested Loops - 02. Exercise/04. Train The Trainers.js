function trainTheTrainers(input) {
    let index = 0;
    let juryCount = Number(input[index]);
    index++;
    let presentation = input[index];

    let scoreCount = 0;
    let averageScore = 0;

    let totalScoreCount = 0;
    let totalCounter = 0;
    let totalAverageScore = 0;

    while (presentation !== "Finish") {
        index++;

        let counter = 1;
        while (counter <= juryCount) {
            let currentScore = Number(input[index]);

            scoreCount += currentScore;
            counter++;

            totalScoreCount += currentScore;
            totalCounter++;

            if (counter > juryCount) {
                averageScore = scoreCount / juryCount;
                console.log(`${presentation} - ${averageScore.toFixed(2)}.`);
                counter = 1;
                scoreCount = 0;
                break;
            }
            index++;
        }
        index++;
        presentation = input[index];
    }
    totalAverageScore = totalScoreCount / totalCounter;
    console.log(`Student's final assessment is ${totalAverageScore.toFixed(2)}.`);
}

trainTheTrainers(
    ["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]
);

trainTheTrainers(
    ["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"]
);

trainTheTrainers(
    ["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"]
);