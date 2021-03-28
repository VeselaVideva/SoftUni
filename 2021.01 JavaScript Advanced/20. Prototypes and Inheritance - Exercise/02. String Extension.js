const { expect } = require('chai');

(function stringExtension() {
    String.prototype.ensureStart = function(str) {
        // append str to the beginning of a string, only if it’s not already present
        if (!this.startsWith(str)) {
            str += this;
            return str;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function(str) {
        // append str to the end of a string, only if it’s not already present
        if (!this.endsWith(str)) {
            str = this + str;
            return str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function() {
        // return true if the string is empty, false otherwise
        return this.length === 0;
    };

    String.prototype.truncate = function(n) {
        // truncates the string to n characters by removing words and appends an ellipsis
        if (this.length <= n) {
            return this.toString();
        } else {
            if (n < 4) {
                return '...'.substring(0, n);
            }
            let trimmable = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF';
            let reg = new RegExp('(?=[' + trimmable + '])');
            let words = this.split(reg);
            let count = 0;
            return words.filter(function(word) {
                count += word.length;
                return count <= n - 3;
            }).join('') + '...';
        }
    };

    String.format = function(string, ...params) {
        // static method to replace placeholders with parameters
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]);
        }
        return string;
    };
}());

/*let str = 'my string';
str = str.ensureStart('my');        // 'my string'          // 'my' already present
str = str.ensureStart('my');
str = str.ensureStart('hello ');    // 'hello my string'
str = str.truncate(16);             // 'hello my string'    // length is 15
str = str.truncate(14);             // 'hello my...'        // length is 11
str = str.truncate(8);              // 'hello...'
str = str.truncate(4);              // 'h...'
str = str.truncate(2);              // '..'
str = String.format('The {0} {1} fox', 'quick', 'brown');   // 'The quick brown fox'
str = String.format('jumps {0} {1}', 'dog');                // 'jumps dog {1}'   // no parameter at 1*/

var testString = 'the quick brown fox jumps over the lazy dog';
expect(String.prototype.hasOwnProperty('truncate')).to.equal(true, "Couldn't find truncate() function");
expect(testString.truncate(10)).to.equal('the...', 'Incorrect truncate() functionality 1');
expect(testString.truncate(25)).to.equal('the quick brown fox...', 'Incorrect truncate() functionality 2');
expect(testString.truncate(43)).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect truncate() functionality 3');
expect(testString.truncate(45)).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect truncate() functionality 4');