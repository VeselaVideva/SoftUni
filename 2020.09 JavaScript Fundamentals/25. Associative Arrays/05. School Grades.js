function schoolGrades(input) {
    let students = {}; // declare collection to store result

    for (let line of input) {
        let tokens = line.split(' '); // parse input
        let name = tokens.shift(); // extract name
        let grades = tokens.map(Number); // parse grades as numbers

        if (!students.hasOwnProperty(name)) { // store data
            students[name] = []; // array is for the grades
        }

        let existing = students[name];

        for (let grade of grades) {
            existing.push(grade); // push grades into the array
        }
    }

    function compareAverage([nameA, gradesA], [nameB, gradesB]) { // sort data
        let avgA = gradesA.reduce((p, c) => p + c, 0) / gradesA.length;
        let avgB = gradesB.reduce((p, c) => p + c, 0) / gradesB.length;
        return avgA - avgB;
    }

    let sorted = Object.entries(students).sort(compareAverage);

    for (let [name, grades] of sorted) { // print result
        console.log(`${name}: ${grades.join(', ')}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
              'Tim 5 6',
              'Tammy 2 4 3',
              'Tim 6 6']);
// Tammy: 2, 4, 3
// Lilly: 4, 6, 6, 5
// Tim: 5, 6, 6, 6