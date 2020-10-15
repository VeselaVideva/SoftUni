function addAndSubtract(arr) {
    let newArr = [];
    let sumArr = 0;
    let sumNewArr = 0;

    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i];
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i] + i);
        } else {
            newArr.push(arr[i] - i);
        }
        sumNewArr += newArr[i];
    }
    console.log(newArr);
    console.log(sumArr);
    console.log(sumNewArr);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);