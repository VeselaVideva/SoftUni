function cake(input) {
    let index = 0;
    let widthCake = Number(input[index]);
    index++;
    let lengthCake = Number(input[index]);
    index++;
    let totalCakePieces = widthCake * lengthCake;

    while (input[index] !== "STOP") {
        let pieces = Number(input[index]);
        totalCakePieces = totalCakePieces - pieces;
        index++;

        if (totalCakePieces < 0) {
            break;
        }
    }

    if (totalCakePieces < 0) {
        totalCakePieces = Math.abs(totalCakePieces);
        console.log(`No more cake left! You need ${totalCakePieces} pieces more.`);
    } else {
        console.log(`${totalCakePieces} pieces are left.`);
    }
}

cake(
    ["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]
);
cake(
    ["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"]
);