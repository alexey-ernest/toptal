/**
 * Converts integer number to positioned system with specified base (can be
 * negative).
 *
 * @param      {Number}  base    System's base.
 * @param      {Number}  x       Number to convert.
 * @return     {string}  String representation in base-sys
 */
function convertToBase(base, x) {
  var res = '',
      remainder;
  while (x !== 0) {
    remainder = x % base;
    x = ~~(x / base);
    
    if (remainder < 0) {
      // for nega- positioned systems
      remainder += -base;
      x += 1;
    }

    res = remainder + res;
  }

  return res;
}

/**
 * Converts from base positioned system to decimal system.
 *
 * @param      {Number}  base    System's base.
 * @param      {number}  str     String representation of a number.
 * @return     {number}  Decimal value.
 */
function convertFromBase(base, str) {
  var i,
      len = str.length,
      res = 0;
  for (i = len; i--;) {
    res += Math.pow(base, len - 1 - i) * str[i];
  }
  return res;
}

module.exports = {
  toBase: convertToBase,
  fromBase: convertFromBase
}
