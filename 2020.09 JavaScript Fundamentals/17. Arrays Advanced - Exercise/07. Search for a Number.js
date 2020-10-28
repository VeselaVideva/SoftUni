function searchForANumber(arr, [takeCount, deleteCount, searchCount]) {
    let counter = 0;
    arr.length = takeCount;
    arr.splice(0, deleteCount);

    for (let num of arr) {
        if (num === searchCount) {
            counter++;
        }
    }
    return `Number ${searchCount} occurs ${counter} times.`;
}

console.log(searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])); // "Number 3 occurs 1 times."