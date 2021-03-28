function matchFullName(text) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let match = pattern.exec(text); // check if name match the pattern

    let result = '';

    while (match !== null) {
        result += match + ' ';
        match = pattern.exec(text);
    }

    console.log(result); // print result
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");
// Ivan Ivanov Test Testov