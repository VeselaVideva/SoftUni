function bonusScoringSystem(input) {
    let attendances = input.map(Number);
    let countOfStudents = attendances.shift();  // an integer number in the range [0…50]
    let countOfLectures = attendances.shift();  // an integer number in the range [0...50]
    let initialBonus = attendances.shift();     // an integer number in the range [0….100]
    let bonusPoints = [];
    let maxBonus = 0;
    let studentAttendances = 0;

    for (let i = 0; i < countOfStudents; i++) {
        let attendance = attendances[i];
        if (attendance === 0) {
            maxBonus = 0;
        } else {
            let totalBonus = attendance / countOfLectures * (5 + initialBonus);
            bonusPoints.push(totalBonus);
            bonusPoints.sort((a, b) => b - a);
            maxBonus = Math.round(bonusPoints[0]);
        }
    }

    studentAttendances = attendances.sort((a, b) => b - a).slice(0, 1);
    if (countOfLectures === 0) {
        studentAttendances = 0;
    }

    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${studentAttendances} lectures.`);
}

bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20']);
// Max Bonus: 34.
// The student has attended 24 lectures.

bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);
// Max Bonus: 18.
// The student has attended 28 lectures.

bonusScoringSystem([1, 0, 0, 0]);
bonusScoringSystem([0, 0, 0]);