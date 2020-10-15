function addAndSubtract(x, y, z) {
    let sum = (a, b) => a + b;
    let result = sum(x, y) - z;
    return result;
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));