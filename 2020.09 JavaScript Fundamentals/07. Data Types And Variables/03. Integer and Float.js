function integerAndFloat(a, b, c) {
    let sum = a + b + c;

    if (Math.trunc(sum) === sum) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);