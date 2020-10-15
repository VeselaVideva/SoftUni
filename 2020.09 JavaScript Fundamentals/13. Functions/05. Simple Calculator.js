function simpleCalculator(x, y, operator) {
    switch (operator) {
        case 'multiply':
            let multiply = (a, b) => a * b;
            return multiply(x, y);
            break;
        case 'divide':
            let divide = (a, b) => a / b;
            return divide(x, y);
            break;
        case 'add':
            let add = (a, b) => a + b;
            return add(x, y);
            break;
        case 'subtract':
            let subtract = (a, b) => a - b;
            return subtract(x, y);
            break;
    }
}

console.log(simpleCalculator(5, 5, 'multiply'));
console.log(simpleCalculator(40, 8, 'divide'));
console.log(simpleCalculator(12, 19, 'add'));
console.log(simpleCalculator(50, 13, 'subtract'));