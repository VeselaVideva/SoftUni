function divide(input) {
    let index = 0;
    let numbers = Number(input[index]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;

    for (let index = 1; index < input.length; index++) {
        if (Number(input[index]) % 2 === 0) {
            counter1 += 1;
            p1 = counter1 / input[0] * 100;
        }
    }

    for (let index = 1; index < input.length; index++) {
        if (Number(input[index]) % 3 === 0) {
            counter2 += 1;
            p2 = counter2 / input[0] * 100;
        }
    }

    for (let index = 1; index < input.length; index++) {
        if (Number(input[index]) % 4 === 0) {
            counter3 += 1;
            p3 = counter3 / input[0] * 100;
        }
    }

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}

divide(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);
divide(["3", "3", "6", "9"]);