function histogram(input) {
    let index = 0;
    let numbers = input[index];

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let index = 1; index < input.length; index++) {
        if (input[index] < 200) {
            p1Counter += 1;
            p1 = p1Counter / input[0] * 100;
        } else if (input[index] >= 200 && input[index] < 400) {
            p2Counter += 1;
            p2 = p2Counter / input[0] * 100;
        } else if (input[index] >= 400 && input[index] < 600) {
            p3Counter += 1;
            p3 = p3Counter / input[0] * 100;
        } else if (input[index] >= 600 && input[index] < 800) {
            p4Counter += 1;
            p4 = p4Counter / input[0] * 100;
        } else if (input[index] >= 800) {
            p5Counter += 1;
            p5 = p5Counter / input[0] * 100;
        }
    }

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}

histogram(["3", "1", "2", "999"]);
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);