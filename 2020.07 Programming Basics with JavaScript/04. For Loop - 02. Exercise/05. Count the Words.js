function wordsCount(input) {
    let text = input;
    let spaces = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            spaces += 1;
        }
    }

    let words = spaces + 1;

    if (words > 10) {
        console.log(`The message is too long to be send! Has ${words} words.`);
    } else {
        console.log(`The message was send successfully!`);
    }
}

wordsCount("This message has exactly eleven words. One more as it's allowed!");
wordsCount("This message has ten words and you can send it!");