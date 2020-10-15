function evenAndOddSubtraction(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        if (Number(arr[i]) % 2 === 0) {
            sumEven += Number(arr[i]);
        } else {
            sumOdd += Number(arr[i]);
        }
    }
    let diff = sumEven - sumOdd;
    console.log(diff);
}

evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9]);
evenAndOddSubtraction([2,4,6,8,10]);