
/**
 * Fibonacci numbers with memoization (caching);
 *
 * @param      {number}    n       Fibonacci number position.
 * @return     {Function}  Fibonacci value.
 */
function fibonacci(n) {
  if (!fibonacci.cache) {
    // memoization technique
    fibonacci.cache = {
      0: 0,
      1: 1
    };
  }
  
  // return cached result if there is one
  if (typeof fibonacci.cache[n] !== 'undefined') {
    return fibonacci.cache[n];
  }
  
  var result = fibonacci(n - 1) + fibonacci(n - 2);
  
  // caching result
  fibonacci.cache[n] = result;
  
  return result;
}

module.exports = fibonacci;