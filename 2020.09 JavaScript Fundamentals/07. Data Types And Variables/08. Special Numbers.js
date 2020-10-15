function specialNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let lastDigit = i % 10;
        let firstDigit = (i - lastDigit) / 10;
        let sumOfDigits = firstDigit + lastDigit;
        let special;

        if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
            special = true;
        } else {
            special = false;
        }
        special = special ? `True` : `False`;

        console.log(`${i} -> ${special}`);
    }
}

specialNumbers(15);