function sumOfNumbers(arg) {
    let index = arg;
    let sum = 0;

    for (let i = 0; i < index.length; i++) {
        sum += Number(index[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers("1234");
sumOfNumbers("564891");