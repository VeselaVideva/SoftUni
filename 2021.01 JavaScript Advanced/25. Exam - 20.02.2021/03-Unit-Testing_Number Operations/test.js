const { describe } = require('mocha');
const { assert, expect } = require('chai');

// CODE FOR TEST
const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr;
    }
};

// Unit Tests - 100/100
describe("Exam 20.02.2020 Tests", () => {
    it('powNumber', () => {
        assert.equal(numberOperations.powNumber(2), 4);
    })

    it('numberChecker', () => {
        assert.throw(() => numberOperations.numberChecker('true'), 'The input is not a number!');
        assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!');
        assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
        assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
    })

    it('sumArrays', () => {
        assert.deepEqual(numberOperations.sumArrays([1, 3, 5], [4, 6, 7]), [5, 9, 12]);
        assert.deepEqual(numberOperations.sumArrays([1, 3], [4, 6, 7]), [5, 9, 7]);
    })
});