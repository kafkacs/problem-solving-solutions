// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

// ----------------------------------------

// solution using the binary search algorithm to find the base of a integar
// ex: 1*2 = 1 && != x;
//     2*2 = 4 && != x;
//     3*2 = 9 && != x;
//     ect... until we find the base of the integer that is less than x and the next base is greater than x.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0;
  let r = x;
  let res = 0;

  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);

    if (m * m > x) {
      r = m - 1;
    } else if (m * m < x) {
      l = m + 1;
      res = m;
    } else {
      return m;
    }
  }

  return res;
};
