function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let grade = input[index];
    let grades = 0;
    let sumGrades = 0;
    let badGrades = 0;
    let excluded = false;

    while (grades < 12) {
        grade = Number(input[index]);
        sumGrades += grade;
        index++;

        if (grade < 4) {
            badGrades++;
        }
        if (badGrades > 1) {
            excluded = true;
            break;
        }
        grades++;
    }

    if (excluded) {
        console.log(`${name} has been excluded at ${grades} grade`);
    } else {
        let averageGrade = sumGrades / grades;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}

graduation(
    ["Gosho",
        "5",
        "5.5",
        "6",
        "5.43",
        "5.5",
        "6",
        "5.55",
        "5",
        "6",
        "6",
        "5.43",
        "5"]
);
graduation(
    ["Mimi",
        "5",
        "6",
        "5",
        "6",
        "5",
        "6",
        "6",
        "2",
        "3"]
);