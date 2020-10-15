function maxNumber(arr) {
    let topInt = '';

    for (let i = 0; i < arr.length; i++) {
        let nextInt = arr[i + 1];
        if (arr[i] > nextInt && arr[i] > arr[arr.length - 1] || nextInt === undefined) {
            topInt += arr[i] + ' ';
        }
    }
    console.log(topInt);
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);