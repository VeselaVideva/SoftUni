function examPreparation(input) {
    let index = 0;
    let maxBadGrades = Number(input[index]);
    index++;

    let exam = "";
    let examCounter = 0;
    let badGradesCounter = 0;
    let score = 0;
    let takeABrake = false;

    while (input[index] !== "Enough") {
        if (badGradesCounter === maxBadGrades) {
            takeABrake = true;
            break;
        }
        exam = input[index];
        examCounter += 1;
        index++;
        let grade = Number(input[index]);
        if (grade <= 4) {
            badGradesCounter += 1;
        }
        score += grade;
        index++;
    }

    let averageScore = score / examCounter;

    if (takeABrake) {
        console.log(`You need a break, ${badGradesCounter} poor grades.`);
    } else {
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${examCounter}`);
        console.log(`Last problem: ${exam}`);
    }
}

examPreparation(
    ["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]
);
examPreparation(
    ["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"]
);