const { expect } = require('chai');

(function arrayExtension() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    };

    Array.prototype.skip = function(n) {
        let result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    };

    Array.prototype.take = function(n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    };

    Array.prototype.sum = function() {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }
        return sum;
    };

    Array.prototype.average = function() {
        return this.sum() / this.length;
    };
}());

let testArray = [1, 2, 3];

expect(Array.prototype.hasOwnProperty('last')).to.equal(true, "Couldn't find last() function");
expect(testArray.last()).to.equal(3, 'Incorrect last element');

expect(Array.prototype.hasOwnProperty('skip')).to.equal(true, "Couldn't find skip() function");
expect(testArray.skip(1)[0]).to.equal(2, 'Incorrect result of skip()');
expect(testArray.skip(1)[1]).to.equal(3, 'Incorrect result of skip()');

expect(Array.prototype.hasOwnProperty('take')).to.equal(true, "Couldn't find take() function");
expect(testArray.take(2)[0]).to.equal(1, 'Incorrect result of take()');
expect(testArray.take(2)[1]).to.equal(2, 'Incorrect result of take()');

expect(Array.prototype.hasOwnProperty('sum')).to.equal(true, "Couldn't find sum() function");
expect(testArray.sum()).to.equal(6, 'Incorrect sum');

expect(Array.prototype.hasOwnProperty('average')).to.equal(true, "Couldn't find average() function");
expect(testArray.average()).to.equal(2, 'Incorrect average value');