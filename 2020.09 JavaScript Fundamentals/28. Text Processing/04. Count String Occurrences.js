function countStringOccurrences(text, str) {
    let words = text.split(' ');
    let counter = 0;

    for (let word of words) {
        if (word === str) {
            counter++;
        }
    }

    console.log(counter);
}

countStringOccurrences("This is a word and it also is a sentence", "is"); // 2