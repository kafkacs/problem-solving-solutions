// 1796. Second Largest Digit in a String
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

 

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit. 

// ------------------------------------------------------------------------


/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let first_largest = -1;
    let second_largest = -1;

for(let i = 0; i <= s.length; i ++){
    if(!isNaN(s[i])){
        num = +s[i];
        if(num > first_largest){
            second_largest = first_largest;
            first_largest = num;
        }else if (num > second_largest && num != first_largest){
            second_largest = num;
        }
    }
}
return second_largest;
};
