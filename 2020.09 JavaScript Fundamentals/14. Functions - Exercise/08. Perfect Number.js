function perfectNumber(num) {
    let sum = 1;

    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num ? 'We have a perfect number!' : 'It\'s not so perfect.';
}

console.log(perfectNumber(6));
console.log(perfectNumber(28));
console.log(perfectNumber(1236498));