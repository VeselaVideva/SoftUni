function charactersInRange(a, b) {
    a = a.charCodeAt(0);
    b = b.charCodeAt(0);
    let result = '';
    let smaller = 0;
    let bigger = 0;

    if (a < b) {
        smaller = a;
        bigger = b;
    } else {
        smaller = b;
        bigger = a;
    }
    for (let i = smaller + 1; i < bigger; i++) {
        result += String.fromCharCode(i) + ' ';
    }
    return result;
}

console.log(charactersInRange('a', 'd'));
console.log(charactersInRange('#', ':'));
console.log(charactersInRange('C', '#'));