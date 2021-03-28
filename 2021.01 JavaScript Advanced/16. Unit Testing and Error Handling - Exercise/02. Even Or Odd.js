const { assert } = require('chai');

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}

describe('isOddOrEven', () => {
    it('is string', () => {
        assert.isUndefined(isOddOrEven(undefined));
        assert.isUndefined(isOddOrEven(1));
    })
    it('is even', () => {
        assert.equal(isOddOrEven('aa'), 'even');
        assert.equal(isOddOrEven('aabb'), 'even');
    })
    it('is odd', () => {
        assert.equal(isOddOrEven('a'), 'odd');
        assert.equal(isOddOrEven('abc'), 'odd');
    })
})