function primeNonPrime(input) {
    let index = 0;
    let data = input[index];
    let sumPrime = 0;
    let sumNonPrime = 0;

    while (data !== "stop") {
        let number = Number(data);
        let isPrime = true;
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
            }
        }
        if (!isPrime && number >= 0) { //nonPrime
            sumNonPrime += number;
        } else if (isPrime && number >= 0) { //Prime
            sumPrime += number;
        }
        if (number < 0) {
            console.log(`Number is negative.`);
        }
        index++;
        data = input[index];
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

primeNonPrime(
    ["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"]
);

primeNonPrime(
    ["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"]
);

primeNonPrime(
    ["0",
    "-9",
    "0",
    "stop"]
);
