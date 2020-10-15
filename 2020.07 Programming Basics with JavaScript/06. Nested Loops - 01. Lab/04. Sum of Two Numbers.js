function sumOfTwoNumbers(input) {
    let index = 0;
    let firstNum = Number(input[index]);
    index++;
    let lastNum = Number(input[index]);
    index++;
    let magicNum = Number(input[index]);
    let combination = 0;
    let found = false;

    for (let i = firstNum; i <= lastNum; i++) {
        for (let j = firstNum; j <= lastNum; j++) {
            combination++;
            let sum = i + j;
            if (sum === magicNum) {
                console.log(`Combination N:${combination} (${i} + ${j} = ${magicNum})`);
                found = true;
                break;
            }
        }
        if (found) {
            break;
        }
    }
    if (!found) {
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "2000"]);