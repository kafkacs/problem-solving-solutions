// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

// Example 1:


// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:


// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:


// Input: p = [1,2,1], q = [1,1,2]
// Output: false
 

// -------------------same tree 100------------------------

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

 function traverse(node) {
        if (node === null) return [null];

        return [
            node.val,
            ...traverse(node.left),
            ...traverse(node.right)
        ];
    }

    let treeOne = traverse(p);
    let treeTwo = traverse(q);

    return JSON.stringify(treeOne) === JSON.stringify(treeTwo);

};