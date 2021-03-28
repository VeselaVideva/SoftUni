function sortByTwoCriteria(arr) {
    let sorted = arr.slice().sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length);
    console.log(sorted.join('\n'));
}

sortByTwoCriteria(['alpha', 'beta', 'gamma']);
// beta
// alpha
// gamma
sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// Jack
// Isacc
// George
// Theodor
// Harrison
sortByTwoCriteria(['test', 'Deny', 'omen', 'Default']);
// Deny
// omen
// test
// Default