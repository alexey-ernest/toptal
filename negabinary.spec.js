var assert = require('assert');

var negabinary = require('./negabinary');
var toNegabinary = negabinary.toBase.bind(this, -2);
var fromNegabinary = negabinary.fromBase.bind(this, -2);

console.log(toNegabinary(23));
console.log(fromNegabinary('1101011'));

assert(toNegabinary(23) === '1101011');
assert(fromNegabinary('1101011') === 23);
