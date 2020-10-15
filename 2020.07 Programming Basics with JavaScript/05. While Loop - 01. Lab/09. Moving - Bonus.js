function moving(input) {
    let index = 0;
    let spaceWidth = Number(input[index]);
    index++;
    let spaceLength = Number(input[index]);
    index++;
    let spaceHeight = Number(input[index]);
    index++;
    let totalVolume = spaceWidth * spaceLength * spaceHeight;
    let boxesVolume = 0;
    let freeVolume = 0;

    while (input[index] !== "Done") {
        let box = Number(input[index]);
        boxesVolume += box;

        box = Number(input[index]);
        index++;

        if(boxesVolume > totalVolume) {
            break;
        }
    }

    freeVolume = Math.abs(totalVolume - boxesVolume);

    if (totalVolume >= boxesVolume) {
        console.log(`${freeVolume} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${freeVolume} Cubic meters more.`);
    }
}

moving(
    ["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]
);
moving(
    ["10",
    "1",
    "2",
    "4",
    "6",
    "Done"]
);