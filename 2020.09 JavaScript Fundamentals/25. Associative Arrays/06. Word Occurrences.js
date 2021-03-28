function wordOccurrences(arr) {
    let words = new Map();

    for (let word of arr) {
        let count = 1;

        if (words.has(word)) { // check for existing values
            let existing = words.get(word);
            words.set(word, existing + count);
        } else {
            words.set(word, count);
        }
    }

    let sorted = Array.from(words).sort((a, b) => b[1] - a[1]); // convert to array and sort by count

    for (let [word, counter] of sorted) { // print result
        console.log(`${word} -> ${counter} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
// sentence -> 3 times
// Here -> 2 times
// is -> 2 times
// the -> 2 times
// first -> 1 times
// another -> 1 times
// And -> 1 times
// finally -> 1 times
// third -> 1 times