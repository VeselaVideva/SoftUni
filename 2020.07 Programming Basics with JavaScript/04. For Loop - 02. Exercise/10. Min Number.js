function minNumber(input) {
    let index = 0;
    let nums = Number(input[0]);
    let minNum = Number.MAX_SAFE_INTEGER;

    for (index = 1; index < input.length; index++) {
        let num = Number(input[index]);
        if (num < minNum) {
            minNum = num;
        }
    }
    console.log(minNum);
}

minNumber(["2", "100", "99"]);
minNumber(["3", "-10", "20", "-30"]);
minNumber(["4", "45", "-20", "7", "99"]);
minNumber(["1", "999"]);
minNumber(["2", "-1", "-2"]);