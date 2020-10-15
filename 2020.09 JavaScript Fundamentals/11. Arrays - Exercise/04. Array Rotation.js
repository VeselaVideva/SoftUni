function arrayRotation(arr, rotations) {
    for (let i = 1; i <= rotations; i++) {
        let index = arr.shift();
        arr.push(index);
    }
    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);