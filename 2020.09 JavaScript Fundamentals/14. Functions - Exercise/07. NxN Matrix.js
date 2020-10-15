function nXnMatrix(n) { // Solution 1
    let result = '';

    for (let row = 0; row < n; row++) {
        result += n + " ";
    }
    for (let col = 0; col < n; col++) {
        console.log(`${result}`);
    }
}

function nXnMatrix(n) { // Solution 2
    for (let i = 0; i < n; i++) {
        let row = '';

        for (let j = 0; j < n; j++) {
            row += n + ' ';
        }
        console.log(row);
    }
}

nXnMatrix(3);
nXnMatrix(7);
nXnMatrix(2);