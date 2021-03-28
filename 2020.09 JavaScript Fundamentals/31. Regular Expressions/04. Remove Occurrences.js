function removeOccurrences(word, text) {
    let old;
    while (old !== text) {
        old = text;
        text = text.replace(word, '');
    }
    console.log(text);
}

removeOccurrences('ice', 'kicegiciceeb'); // kgb