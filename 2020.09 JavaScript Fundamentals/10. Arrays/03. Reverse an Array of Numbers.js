function reverseAnArrayOfNumbers(n, arr) {
    arr.length = n;
    let newArr = arr.reverse().join(' ');
    console.log(newArr);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);