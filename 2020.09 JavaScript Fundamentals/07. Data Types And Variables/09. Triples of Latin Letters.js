function triplesOfLatinLetters(num) {
    for (let a = 0; a < num; a++) {
        let letterA = String.fromCharCode(97 + a);
        for (let b = 0; b < num; b++) {
            let letterB = String.fromCharCode(97 + b);
            for (let c = 0; c < num; c++) {
                let letterC = String.fromCharCode(97 + c);
                console.log(`${letterA}${letterB}${letterC}`);
            }
        }
    }
}

triplesOfLatinLetters(3);