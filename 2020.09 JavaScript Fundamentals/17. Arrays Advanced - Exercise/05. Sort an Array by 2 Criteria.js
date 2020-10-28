function sortAnArrayBy2Criteria(arr) {
    let orderedByAlphabeticalValue = arr.sort((a, b) => a.localeCompare(b));
    let orderedByLength = orderedByAlphabeticalValue.sort((a, b) => a.length - b.length);

    return orderedByLength.join('\n');
}

console.log(sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]));
console.log(sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]));