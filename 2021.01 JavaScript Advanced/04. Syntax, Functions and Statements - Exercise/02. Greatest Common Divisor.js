function gcd(a, b) {
    let divisors = [];

    if (a > b) {
        for (let i = 0; i <= a; i++) {
            if (a % i === 0 && b % i === 0) {
                divisors.push(i);
            }
        }
    } else {
        for (let i = 0; i <= b; i++) {
            if (a % i === 0 && b % i === 0) {
                divisors.push(i);
            }
        }
    }

    console.log(divisors.slice(-1).join(''));
}

gcd(15, 5); // 5
gcd(2154, 458); // 2
gcd(6, 18); // 6