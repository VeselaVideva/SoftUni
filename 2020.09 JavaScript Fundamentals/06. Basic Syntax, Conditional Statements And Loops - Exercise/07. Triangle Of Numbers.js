function triangleOfNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let printLine = '';
        for (let j = 1; j <= i; j++) {
            printLine += i + ' ';
        }
        console.log(printLine);
    }
}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);