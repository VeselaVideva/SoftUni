function accountBalance(input) {
    let index = 0;
    let money = Number(input[index]);
    let total = 0;

    while (input[index] !== "NoMoreMoney") {
        let currentSum = Number(input[index]);
        if (currentSum < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        total += currentSum;
        console.log(`Increase: ${currentSum.toFixed(2)}`);
        currentSum = Number(input[index]);
        index++;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}

//accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
accountBalance(["120", "45.55", "-150"]);