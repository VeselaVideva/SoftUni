function equalSums(arr) {
    let isIndex = false;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        if (i !== 0) {
            for (let j = 0; j < i; j++) {
                leftSum += arr[j];
            }
        }
        if (i !== arr.length - 1) {
            for (let r = i + 1; r < arr.length; r++) {
                rightSum += arr[r];
            }
        }
        if (leftSum === rightSum) {
            isIndex = true;
            console.log(i);
        }
    }
    if (!isIndex) {
        console.log('no');
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);