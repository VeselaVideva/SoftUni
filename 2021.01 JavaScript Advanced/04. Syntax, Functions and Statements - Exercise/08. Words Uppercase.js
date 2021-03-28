function wordsUppercase(str) {
    const regex = /\w+/g;
    let output = [];
    let match;

    while ((match = regex.exec(str))) {
        output.push(match[0].toUpperCase());
    }

    return output.join(', ');
}

console.log(wordsUppercase('Hi, how are you?')); // HI, HOW, ARE, YOU
console.log(wordsUppercase('hello')); // HELLO