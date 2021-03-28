function sortingNumbers(arr) {
    let fromSmallest = arr.slice().sort((a, b) => a - b);
    let fromBiggest = arr.slice().sort((a, b) => b - a);

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result.push(fromSmallest.shift());
        } else {
            result.push(fromBiggest.shift());
        }
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]