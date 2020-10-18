function firstAndLastKNumbers(arr) {
    let k = arr.shift();

    let firstK = arr.slice(0, k);
    let lastK = arr.slice(-k);

    return firstK.join(' ') + '\n' + lastK.join(' ');
}

console.log(firstAndLastKNumbers([2, 7, 8, 9]));
console.log(firstAndLastKNumbers([3, 6, 7, 8, 9]));