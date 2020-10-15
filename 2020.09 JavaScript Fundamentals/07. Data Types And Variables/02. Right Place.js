function rightPlace(firstString, char, secondString) {
    let result = firstString.replace('_', char);

    if (result === secondString) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');