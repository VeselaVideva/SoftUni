function validityChecker(x1, y1, x2, y2) {

    function getResult(x1, y1, x2, y2) {
        const distance = Math.sqrt((x2 - x1)** 2 + (y2 - y1)** 2);
        return Number.isInteger(distance) ? 'valid' : 'invalid';
    }

    return `{${x1}, ${y1}} to {0, 0} is ${getResult(x1, y1, 0, 0)}` + `\n`
         + `{${x2}, ${y2}} to {0, 0} is ${getResult(x2, y2, 0, 0)}` + `\n`
         + `{${x1}, ${y1}} to {${x2}, ${y2}} is ${getResult(x1, y1, x2, y2)}`;
}

console.log(validityChecker(3, 0, 0, 4));
// {3, 0} to {0, 0} is valid
// {0, 4} to {0, 0} is valid
// {3, 0} to {0, 4} is valid
console.log(validityChecker(2, 1, 1, 1));
// {2, 1} to {0, 0} is invalid
// {1, 1} to {0, 0} is invalid
// {2, 1} to {1, 1} is valid