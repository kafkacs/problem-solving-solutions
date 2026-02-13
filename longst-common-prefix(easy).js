// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

// -------------------------

var longestCommonPrefix = function (strs) {
  firstWord = strs[0];
  result = "";
  countOfPrefix = [];
  // {
  //     char: 'f',
  //     count : 2
  // }

  for (let i = 0; i < firstWord.length; i++) {
    // brake all characters of a word into a object with count ffor each. letter.
    countOfPrefix.push({ char: firstWord[i], count: 1 });
  }

  //incriment the count for each. letter when found

  for (let word = 1; word < strs.length; word++) {
    for (let letter = 0; letter < strs[word].length; letter++) {
      if (
        countOfPrefix[letter] != undefined &&
        countOfPrefix[letter].char == strs[word][letter]
      ) {
        countOfPrefix[letter].count = countOfPrefix[letter].count + 1;
      }
    }
  }

  //add all characters into. a word.
  for (let characters = 0; characters < countOfPrefix.length; characters++) {
    if (countOfPrefix[characters].count == strs.length) {
      result = result + countOfPrefix[characters].char;
    } else {
      break;
    }
  }

  return result;
};
