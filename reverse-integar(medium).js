// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// ------------------7. Reverse Integer--------------------------

var reverse = function (x) {
  let reversed = 0;

  while (x !== 0) {
    let digit = x % 10;
    x = Math.trunc(x / 10);

    reversed = reversed * 10 + digit;

    // overflow check
    if (reversed < -2147483648 || reversed > 2147483647) {
      return 0;
    }
  }

  return reversed;
};
