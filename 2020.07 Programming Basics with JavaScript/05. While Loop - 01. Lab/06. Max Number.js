function maxNumber(input) {
    let index = 0;
    let number = Number(input[index]);
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (input[index] !== "Stop") {
        let currentNum = Number(input[index]);
        if (currentNum > maxNum) {
            maxNum = currentNum;
        }
        currentNum = input[index];
        index++;
    }
    console.log(maxNum);
}

maxNumber(["100", "99", "80", "70", "Stop"]);
maxNumber(["-10", "20", "-30", "Stop"]);
maxNumber(["45", "-20", "7", "99", "Stop"]);
maxNumber(["999", "Stop"]);
maxNumber(["-1", "-2", "Stop"]);