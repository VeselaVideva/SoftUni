function nonDecreasingSubsequence(arr) {
    let result = arr[0] + ' ';
    let biggest = 0;

    for (let i = 0; i < arr.length; i++) {
        let nextEl = arr[i + 1];

        if (nextEl >= arr[i] && nextEl >= arr[0] && nextEl !== undefined) {
            biggest = nextEl;
            result += biggest + ' ';
        }
    }
    console.log(result);
}

nonDecreasingSubsequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubsequence([ 1, 2, 3, 4]);
nonDecreasingSubsequence([ 20, 3, 2, 15, 6, 1]);