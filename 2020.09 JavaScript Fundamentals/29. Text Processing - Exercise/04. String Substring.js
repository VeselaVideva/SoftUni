function stringSubstring(word, text) {
    text = text.split(' ').map(e => e.toLocaleLowerCase());

    if (text.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`)
    }
}

stringSubstring('javascript',
                'JavaScript is the best programming language');
// javascript

stringSubstring('python',
                'JavaScript is the best programming language');
// python not found!