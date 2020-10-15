function oddAndEvenSum(n) {
    let sumOdd = 0;
    let sumEven = 0;
    n = String(n);

    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 !== 0) {
            sumOdd += Number(n[i]);
        } else {
            sumEven += Number(n[i]);
        }
    }
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}

console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));