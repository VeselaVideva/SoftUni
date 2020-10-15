function numberModification(num) {

    function getSum(number) {
        let numToString = number.toString();
        let sum = 0;
        for (let i = 0; i < numToString.length; i++) {
            sum += Number(numToString[i]);
        }
        return sum;
    }

    function getAverage(num) {
        return getSum(num) / num.toString().length;
    }

    while (getAverage(num) < 5) {
        num += '9';
    }
    return num;
}

console.log(numberModification(101));
console.log(numberModification(5835));