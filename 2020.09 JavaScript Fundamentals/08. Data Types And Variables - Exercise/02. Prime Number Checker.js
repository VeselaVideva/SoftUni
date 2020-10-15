function primeNumberChecker(num) {
    let isPrime = true;

    if (num === 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }
    }
    console.log(isPrime);
}

primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);