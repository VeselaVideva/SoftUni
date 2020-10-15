function operations(arg1, arg2, arg3) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let operator = arg3;

    let result;
    let resultType;

    switch (operator) {
        case "+":
            result = num1 + num2;
            if (result % 2 === 0) {
                resultType = "even";
            } else {
                resultType = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${resultType}`);
            break;
        case "-":
            result = num1 - num2;
            if (result % 2 === 0) {
                resultType = "even";
            } else {
                resultType = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${resultType}`);
            break;
        case "*":
            result = num1 * num2;
            if (result % 2 === 0) {
                resultType = "even";
            } else {
                resultType = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${resultType}`);
            break;
        case "/":
            result = num1 / num2;
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`);
            }
            break;
        case "%":
            result = num1 % num2;
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                console.log(`${num1} ${operator} ${num2} = ${result}`);
            }
            break;
        default:
            break;
    }
}

operations("10", "12", "+");
operations("10", "1", "-");
operations("7", "3", "*");
operations("123", "12", "/");
operations("10", "3", "%");
operations("112", "0", "/");
operations("10", "0", "%");