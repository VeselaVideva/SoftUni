function theLift(input) {
    let people = Number(input.shift());
    let lift = String(input).split(' ').map(Number);

    lift = lift.map(element => {
        let freeSpots = 4 - element;

        if (people >= freeSpots) {
            people -= freeSpots;
            element = element + freeSpots;
        } else {
            element += people;
            people = 0;
        }
        return element;
    })

    let maximumSpots = (lift.length) * 4;
    let takenSpots = lift.reduce((p, c) => p + c, 0);

    if (maximumSpots > takenSpots) {
        console.log("The lift has empty spots!");
        console.log(lift.join(" "));
    } else if ((maximumSpots === takenSpots) && people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(lift.join(" "));
    } else if ((maximumSpots === takenSpots) && (people === 0)) {
        console.log(lift.join(" "));
    }
}

theLift(["15", "0 0 0 0 0"]);   // The lift has empty spaces!
                                // 4 4 4 3 0

theLift(["20", "0 2 0"]);       // There isn't enough space! 10 people in a queue!
                                // 4 4 4