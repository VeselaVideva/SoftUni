function mergeArrays(arr1, arr2) {
    let arr3 = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (i === j) {
                if (i % 2 === 0) {
                    arr3.push(Number(arr1[i]) + Number(arr2[j]));
                } else {
                    arr3.push(arr1[i] + arr2[j]);
                }
            }
        }
    }
    console.log(arr3.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);