function specialNumbers(arg) {
    let n = Number(arg);
    let result = " ";

    for (let number = 1111; number <= 9999; number++) {
        let specialNumber = false;
        let string = "";
        string += number;

        for (let i = 0; i < string.length; i++) {
            if (n % Number(string.charAt(0)) === 0 && n % Number(string.charAt(1)) === 0 && n % Number(string.charAt(2)) === 0 && n % Number(string.charAt(3)) === 0) {
                specialNumber = true;
            } else {
                break;
            }
        }
        if (specialNumber) {
            result += `${number} `;
        }
    }
    console.log(result);
}

specialNumbers(["3"]);
specialNumbers(["11"]);
specialNumbers(["16"]);