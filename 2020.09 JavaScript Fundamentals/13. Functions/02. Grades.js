function grades(grade) {
    if (grade >= 2 && grade < 3) {
        grade = 2;
        return `Fail (${grade})`;
    } else if (grade >= 3 && grade < 3.50) {
        return `Poor (${grade.toFixed(2)})`;
    } else if (grade >= 3.50 && grade < 4.50) {
        return `Good (${grade.toFixed(2)})`;
    } else if (grade >= 4.50 && grade < 5.50) {
        return `Very good (${grade.toFixed(2)})`;
    } else if (grade >= 5.50 && grade <= 6.00) {
        return `Excellent (${grade.toFixed(2)})`;
    }
}

console.log(grades(3.33));
console.log(grades(4.50));
console.log(grades(2.99));