function factorialDivision(x, y) {
    let factorialNumber = number => {
        if (number >= 1) return number * factorialNumber(number - 1);
        else return 1;
    }

    let result = factorialNumber(x) / factorialNumber(y);
    return result.toFixed(2);
}

console.log(factorialDivision(5, 2));
console.log(factorialDivision(6, 2));