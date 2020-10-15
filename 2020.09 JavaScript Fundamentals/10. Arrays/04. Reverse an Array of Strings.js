function reverseAnArrayOfStrings(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let oldEl = arr[i];
        let newEl = arr.length - 1 - i;
        arr[i] = arr[newEl];
        arr[newEl] = oldEl;
    }
    console.log(arr.join(' '));
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
reverseAnArrayOfStrings(['33', '123', '0', 'dd']);