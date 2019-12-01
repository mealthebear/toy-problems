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

let isToeplitzMatrix = (matrix) => {
    for (let i = 0; i < matrix.length - 1; i++) {
        for (j = 0; j < matrix[i].length - 1; j++){
            if(matrix[i][j] != matrix[i+1][j+1])
                return false;
            }
    }
    return true;
};