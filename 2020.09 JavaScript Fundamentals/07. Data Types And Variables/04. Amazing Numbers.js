function amazingNumbers(number) {
    number = number.toString();

    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }

    let result = sum.toString().includes('9');
    result = result ? `True` : `False`;

    console.log(`${number} Amazing? ${result}`);
}

amazingNumbers(1233);
amazingNumbers(999);