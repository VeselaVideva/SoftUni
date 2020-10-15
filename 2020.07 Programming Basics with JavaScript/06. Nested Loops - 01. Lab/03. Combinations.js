function combinations(input) {
    let index = 0;
    let number = Number(input[index]);
    let combinations = 0;

    for (let x = 0; x <= number; x++) {
        for (let y = 0; y <= number; y++) {
            for (let z = 0; z <= number; z++) {
                let sum = x + y + z;
                if (sum === number) {
                    combinations++;
                }
            }
        }
    }
    console.log(combinations);
}

combinations(["25"]);
combinations(["20"]);
combinations(["5"]);