function bombNumbers(sequence, [specialNum, power]) {

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === specialNum) {
            let bombIndex = sequence.indexOf(specialNum);
            let startIndex = Math.max(bombIndex - power, 0);
            sequence.splice(bombIndex, power + 1);
            sequence.splice(startIndex, power);
            i = 0;
        }
    }

    return sequence.reduce((sum, num)=> {
        sum += num
        return sum;
    }, 0);
}

console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));         // 12
console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]));            // 5
console.log(bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]));               // 6
console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]));   // 4