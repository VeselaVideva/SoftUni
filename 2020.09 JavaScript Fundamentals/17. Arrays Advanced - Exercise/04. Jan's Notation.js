function jansNotation(arr) {
    let numbersArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i])) {
            numbersArray.push(Number(arr[i]));
        } else {
            DoMath(numbersArray, arr[i]);
        }
    }

    if (numbersArray.length >= 2){
        console.log('Error: too many operands!')
    } else if (numbersArray.length === 1) {
        console.log(numbersArray.toString());
    }

    function DoMath(numbers, operator) {
        if (numbers.length < 2) {
            console.log('Error: not enough operands!');
        }
        if (operator === '+'){
            numbers[numbers.length - 2] = numbers[numbers.length - 2] + numbers[numbers.length - 1];
            numbers.splice(- 1, 1);
        } else if (operator === '-'){
            numbers[numbers.length - 2] = numbers[numbers.length - 2] - numbers[numbers.length - 1];
            numbers.splice(- 1, 1);
        } else if (operator === '*'){
            numbers[numbers.length - 2] = numbers[numbers.length - 2] * numbers[numbers.length - 1];
            numbers.splice(- 1, 1);
        } else if (operator === '/'){
            numbers[numbers.length - 2] = numbers[numbers.length - 2] / numbers[numbers.length - 1];
            numbers.splice(- 1, 1);
        }
    }
}

jansNotation([3, 4, '+']);                              // 7
jansNotation([5, 3, 4, '*', '-']);                      // -7
jansNotation([7, 33, 8, '-']);                          // Error: too many operands!
jansNotation([15, '/']);                                // Error: not enough operands!
jansNotation([31, 2, '+', 11, '/']);                    // 3
jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);  // 6