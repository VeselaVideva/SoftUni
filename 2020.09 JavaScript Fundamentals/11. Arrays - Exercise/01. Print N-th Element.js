function printNthElement(arr) {
    let step = arr.pop();
    let result = [];

    for (let i = 0; i < arr.length; i += Number(step)) {
        result.push(arr[i]);
    }
    console.log(result.join(' '));
}

printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);