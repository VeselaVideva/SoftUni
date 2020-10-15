function factorial(arg) {
    let num = Number(arg);
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log(factorial);
}

factorial("4");
factorial("8");