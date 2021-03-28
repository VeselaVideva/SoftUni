function censoredWords(text, word) {

    function repeat(word) {
        let result = '';
        for (let i = 1; i <= word.length; i++) {
            result = '*'.repeat(i);
        }
        return result;
    }

    let censored = text.replace(word, repeat(word));

    while (censored.includes(word)) {
        censored = censored.replace(word, repeat(word));
    }

    console.log(censored);
}

censoredWords("A small sentence with some words", "small");
// A ***** sentence with some words
