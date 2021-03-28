function revealWords(words, template) {
    words = words.split(', ');
    template = template.split(' ');

    for (let word of words) {
        let token = '*'.repeat(word.length);
        if (template.includes(token) && word.length === token.length) {
            template.splice(template.indexOf(token), 1, word);
        }
    }
    console.log(template.join(' '));
}

revealWords('great',
            'softuni is ***** place for learning new programming languages');
// softuni is great place for learning new programming languages

revealWords('great, learning',
            'softuni is ***** place for ******** new programming languages');
// softuni is great place for learning new programming languages

revealWords('one, two, three',
    'This is test *** test *** and test *****');