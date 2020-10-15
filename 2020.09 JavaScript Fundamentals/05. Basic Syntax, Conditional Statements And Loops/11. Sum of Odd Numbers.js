function sumOfOddNumbers(n) {
    let counter = 0;
    let sum = 0;

    for (let odd = 1; odd <= 100; odd += 2) {
        counter++;
        console.log(odd);
        sum += odd;
        if (counter === n) {
            break;
        }
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
sumOfOddNumbers(3);