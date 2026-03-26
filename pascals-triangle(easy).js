// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

// note: you can solve it also using python

// var generate = function (numRows) {
//    res = [];

//     for i in range(numRows - 1):
//         temp = [0] + res[-1] + [0] // to access last item in the array
//         row = []
//         for j in range(len(res[-1]) + 1):
//             row.append(temp[j] + temp[j + 1])
//         res.append(row)

//   return res;
// };

// --------------118. Pascal's Triangle-------------------------

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = [];

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);

    for (let j = 1; j < i; j++) {
      row[j] = res[i - 1][j - 1] + res[i - 1][j];
    }

    res.push(row);
  }

  return res;
};
