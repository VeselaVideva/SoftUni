function sumEvenElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        if (Number(arr[i]) % 2 === 0) {
            sum += Number(arr[i]);
        }
    }
    console.log(sum);
}

sumEvenElements(['1','2','3','4','5','6']);
sumEvenElements(['3','5','7','9']);
sumEvenElements(['2','4','6','8','10']);