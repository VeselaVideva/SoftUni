function minNumber(input) {
    let index = 0;
    let number = Number(input[index]);
    let minNum = Number.MAX_SAFE_INTEGER;

    while (input[index] !== "Stop") {
        let currentNum = Number(input[index]);
        if (currentNum < minNum) {
            minNum = currentNum;
        }
        currentNum = input[index];
        index++;
    }
    console.log(minNum);
}

minNumber(["100", "99", "80", "70", "Stop"]);
minNumber(["-10", "20", "-30", "Stop"]);
minNumber(["45", "-20", "7", "99", "Stop"]);
minNumber(["999", "Stop"]);
minNumber(["-1", "-2", "Stop"]);