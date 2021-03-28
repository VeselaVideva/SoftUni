function lettersChangeNumbers(input = []) {
    input = input.split(' ').filter(x => x.length);

    let alphabet = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10,
        K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18,
        S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
    }

    let result = [];

    for (let str of input) {
        let firstChar = str[0];
        let lastChar = str[str.length - 1];
        let number = Number(str.substring(1, str.length - 1));
        let firstCharValue = alphabet[firstChar.toUpperCase()];
        let lastCharValue = alphabet[lastChar.toUpperCase()];

        if (firstChar === firstChar.toUpperCase()) {
            number /= firstCharValue;
        } else {
            number *= firstCharValue;
        }

        if (lastChar === lastChar.toUpperCase()) {
            number -= lastCharValue;
        } else {
            number += lastCharValue;
        }

        result.push(number);
    }

    console.log(result.reduce((a, b) => a + b, 0).toFixed(2));
}

lettersChangeNumbers('A12b s17G'); // 330.00
lettersChangeNumbers('P34562Z q2576f   H456z'); // 46015.13
lettersChangeNumbers('a1A'); // 0.00