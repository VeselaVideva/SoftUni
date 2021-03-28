function printEveryN(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr[i]);
    }
    return result;
}

console.log(printEveryN(
        ['5',
        '20',
        '31',
        '4',
        '20'], 2));
// ['5', '31', '20']
console.log(printEveryN(
        ['dsa',
        'asd',
        'test',
        'tset'], 2));
// ['dsa', 'test']
console.log(printEveryN(
        ['1',
        '2',
        '3',
        '4',
        '5'], 6));
// ['1']