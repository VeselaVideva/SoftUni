function sumFirstAndLast(arr) {
    arr = arr.map(Number);
    return arr.shift() + arr.pop();
}

console.log(sumFirstAndLast(['20', '30', '40']));
console.log(sumFirstAndLast(['5', '10']));