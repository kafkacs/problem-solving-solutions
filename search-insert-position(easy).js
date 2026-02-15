// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sor

// -----------------------------------------

var searchInsert = function (nums, target) {
  //implement binary search
  highIndex = nums.length - 1;
  lowIndex = 0;
  middleIndex = 0;

  while (highIndex >= lowIndex) {
    middleIndex = lowIndex + Math.floor((highIndex - lowIndex) / 2);

    if (nums[middleIndex] == target) return middleIndex;

    if (nums[middleIndex] > target) highIndex = middleIndex - 1;
    else lowIndex = middleIndex + 1;
  }

  return middleIndex + 1;
};
