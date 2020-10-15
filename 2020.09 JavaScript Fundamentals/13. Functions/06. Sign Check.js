function signCheck(a, b, c) {
    let result = (a, b, c) => a * b * c;
    
    if (result(a, b, c) >= 0) {
        return 'Positive';
    } else if (result(a, b, c) < 0) {
        return 'Negative';
    }
}

console.log(signCheck(5, 12, -15));
console.log(signCheck(-6, -12, 14));
console.log(signCheck(-1, -2, -3));
console.log(signCheck(-1, 0, 1));