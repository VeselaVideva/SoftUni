function distinctArray(arr) {
    let result = [];

    for (let el of arr) {
        if (!result.includes((el))) {
            result.push(el);
        }
    }
    return result.join(' ');
}

console.log(distinctArray([1, 2, 3, 4]));                   // 1 2 3 4
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));    // 7 8 9 2 3 4 1
console.log(distinctArray([20, 8, 12, 13, 4, 4, 8, 5]));    // 20 8 12 13 4 5
console.log(distinctArray([7, 1, 2, 3, 54, 7, 2, 2, 1]));   // 7 1 2 3 54