function calculator(a, operator, b) {
    let result = 0;

    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        result = a / b;
    }
    console.log(result.toFixed(2));
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);