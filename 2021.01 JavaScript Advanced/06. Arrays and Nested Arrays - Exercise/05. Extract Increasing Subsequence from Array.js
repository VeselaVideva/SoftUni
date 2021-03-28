function extractSubsequence(arr) {
    let result = [arr[0]];
    let current = result[0];

    for (let i = 0; i < arr.length; i++) {
        let next = arr[i + 1];

        if (next >= current) {
            result.push(next);
            current = next++;
        } else {
            current = current++;
        }
    }

    return result;
}

console.log(extractSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// [1, 3, 8, 10, 12, 24]
console.log(extractSubsequence([1, 2, 3, 4]));
// [1, 2, 3, 4]
console.log(extractSubsequence([20, 3, 2, 15, 6, 1]));
// [20]