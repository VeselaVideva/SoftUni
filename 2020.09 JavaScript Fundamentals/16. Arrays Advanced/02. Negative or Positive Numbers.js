function negativeOrPositiveNumbers(arr) {
    let result = [];
    for (let num of arr) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    return result.join('\n');;
}

console.log(negativeOrPositiveNumbers([7, -2, 8, 9]));
console.log(negativeOrPositiveNumbers([3, -2, 0, -1]));