const { assert } = require('chai');

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('is not number', () => {
            assert.isUndefined(mathEnforcer.addFive('a'));
            assert.isUndefined(mathEnforcer.addFive(undefined));
        })
        it('add properly', () => {
            assert.equal(mathEnforcer.addFive(0), 5);
            assert.equal(mathEnforcer.addFive(-5), 0);
            assert.equal(mathEnforcer.addFive(1.2), 6.2);
        })
    })
    describe('subtractTen', () => {
        it('parameter is not number', () => {
            assert.isUndefined(mathEnforcer.subtractTen('a'), 'parameter is string');
            assert.isUndefined(mathEnforcer.subtractTen(undefined));
            assert.isNaN(mathEnforcer.subtractTen(NaN));
        })
        it('subtracts properly', () => {
            assert.equal(mathEnforcer.subtractTen(0), -10);
            assert.equal(mathEnforcer.subtractTen(-5), -15);
            assert.closeTo(mathEnforcer.subtractTen(10.2), 0.2, 0.1);
            assert.equal(mathEnforcer.subtractTen(1), -9);
        })
    })
    describe('sum', () => {
        it('concatenation with a string', () => {
            assert.isUndefined(mathEnforcer.sum('1', 1));
            assert.isUndefined(mathEnforcer.sum(1, '1'));
        })
        it('sum properly', () => {
            assert.equal(mathEnforcer.sum(1, 1), 2);
            assert.equal(mathEnforcer.sum(1, -1), 0);
            assert.equal(mathEnforcer.sum(-1, -1), -2);
            assert.closeTo(mathEnforcer.sum(1.3, -1.2), 0.1, 0.1);
        })
    })
})

