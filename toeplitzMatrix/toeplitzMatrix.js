// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

// Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

// Example 1:

// Input:
// matrix = [
//   [1,2,3,4],
//   [5,1,2,3],
//   [9,5,1,2]
// ]
// Output: True

// Example 2:

// Input:
// matrix = [
//   [1,2],
//   [2,2]
// ]
// Output: False

// Note:

// matrix will be a 2D array of integers.
// matrix will have a number of rows and columns in range [1, 20].
// matrix[i][j] will be integers in range [0, 99].

// Input: A matrix of integers
// Output: A boolean value
// Constraints: None
// Edge Cases: None

/* ** Strategy ** 
Build two helper functions to make code readable and they'll check
both axes (horizontal & vertical) of the matrix. You only have 
to check the outermost top and left layer of the matrix. For each element,
you increment the x and y coordinates by one and see if the element
there equals itself or undefined. Undefined lets you know you're
out of bounds. If at any point the elements in a diagonal don't equal,
return false. Otherwise, just return true.
*/

let horizontalChecker = (matrix, x, y) => {
    let currentElem = matrix[x][y];
    for (x; x < matrix.length; x++) {
        if (matrix[x][y] !== currentElem) {
            return false;
        }
        y++;
    }
    return true;
}

let verticalChecker = (matrix, x, y) => {
    let currentElem = matrix[x][y];
    for (y; y < matrix.length; y++) {
        if (matrix[x][y] !== currentElem) {
            return false;
        }
        x++;
    }
    return true;
}

let isToeplitzMatrix = (matrix) => {
    if (matrix[0].length === 1) return true;
    let x = 0, y = 0;
    for (let i = 0; i < matrix.length; i++) {
       if (horizontalChecker(matrix, i, y) === false) {
           return false;
       }
    }
    
    for (i = 0; i < matrix.length; i++) {
        if (verticalChecker(matrix, x, i) === false) {
            return false;
        }
    }
    return true;
};