// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


// -------------------------------------------

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
s = s.reverse();
s = s.join("");    
};




// ------------------------------second solution-----------
// let p1 = 0;
// let p2 = arr.length - 1;

// while (p1 != p2 || p2 < p1){
//     let temp = arr[p1];
//     arr[p1] = arr[p2];
//     arr[p2] = temp;
    
//     p1+=1;
//     p2-=1;
    
// }
