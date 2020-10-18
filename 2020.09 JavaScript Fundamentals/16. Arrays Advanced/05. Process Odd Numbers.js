function processOddNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            arr[i] = arr[i] * 2;
            result.push(arr[i]);
        }
    }
    return result.reverse().join(' ');
}

console.log(processOddNumbers([10, 15, 20, 25]));
console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));