function palindromeIntegers(arr) {
    for (let integer of arr) {
        let forward = integer;
        let reversed = String(integer).split('').reverse().join('');

        if (forward == reversed) {
            console.log('true');
        } else {
            console.log('false');
        }
        forward++;
    }
}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);