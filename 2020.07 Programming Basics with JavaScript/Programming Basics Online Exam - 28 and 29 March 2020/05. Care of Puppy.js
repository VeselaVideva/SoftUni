function careOfPuppy(input) {
    let index = 0;
    let availableFoodInKG = input[index];
    index++;

    let availableFoodInG = availableFoodInKG * 1000;
    let eatenFood = 0

    let command = input[index];

    while (command !== "Adopted") {
        let currentFood = Number(command);
        eatenFood += currentFood;
        index++;
        command = input[index];
    }

    let diff = Math.abs(availableFoodInG - eatenFood);

    if (eatenFood <= availableFoodInG) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`);
    }
}

careOfPuppy(['4', '130', '345', '400', '180', '230', '120', 'Adopted']);
careOfPuppy(['3', '1000', '1000', '1000', 'Adopted' ]);
careOfPuppy(['2', '999', '456', '999', '999', '123', '456', 'Adopted']);