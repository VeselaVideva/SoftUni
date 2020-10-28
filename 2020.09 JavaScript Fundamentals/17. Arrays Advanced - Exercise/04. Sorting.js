function sorting(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let biggest = arr.sort((a, b) => b - a);
        result.push(biggest[i]);
        let smallest = arr.sort((a, b) => a - b);
        result.push(smallest[i]);
    }
    result.length = arr.length;
    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]); // 94 1 69 2 63 3 52 18 31 21