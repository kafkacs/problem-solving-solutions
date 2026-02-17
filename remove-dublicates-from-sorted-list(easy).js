// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

// ---------------------------------solution 1---------
var deleteDuplicates = function (head) {
  if (!head) return head;
  let resultSet = new Set();
  let temp = head;

  while (temp !== null) {
    resultSet.add(temp.val);
    temp = temp.next;
  }

  let resultList = [...resultSet];
  let current = head;

  for (let i = 0; i < resultList.length; i++) {
    current.val = resultList[i];

    if (i === resultList.length - 1) {
      current.next = null;
    } else {
      if (!current.next) {
        current.next = new ListNode();
      }
      current = current.next;
    }
  }

  return head;
};

// -----------------------solution 2-----------

var deleteDuplicates = function (head) {
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};
