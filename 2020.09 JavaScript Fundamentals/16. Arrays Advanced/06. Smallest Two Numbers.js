function smallestTwoNumbers(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    return sortedArr.slice(0, 2).join(' ');
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));