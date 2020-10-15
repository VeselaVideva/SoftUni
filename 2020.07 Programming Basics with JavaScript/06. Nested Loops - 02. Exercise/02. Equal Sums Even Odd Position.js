function equalSumsEvenOddPosition(input) {
    let firstNum = Number(input[0]);
    let lastNum = Number(input[1]);
    let printLine = "";

    for (let num = firstNum; num <= lastNum; num++) {
        let currentNum = "" + num;
        let sumOdd = 0;
        let sumEven = 0;
        for (let index = 0; index < currentNum.length; index++) {
            let currentDigit = Number(currentNum.charAt(index));
            if (index % 2 !== 0) { //odd
                sumOdd += currentDigit;
            } else { //even
                sumEven += currentDigit;
            }
        }
        if (sumOdd === sumEven) {
            printLine += `${num} `;
        }
    }
    console.log(printLine);
}

equalSumsEvenOddPosition(["100000", "100050"]);
equalSumsEvenOddPosition(["123456", "124000"]);
equalSumsEvenOddPosition(["299900", "300000"]);
equalSumsEvenOddPosition(["100115", "100120"]);