// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
// find the one that is missing from the array.

// Example 1:
// Input: [3,0,1]  ->  Output: 2

// Example 2:
// Input: [9,6,4,2,3,5,7,0,1]  ->  Output: 8

// Note: Your algorithm should run in linear runtime complexity. 
// Could you implement it using only constant extra space complexity?

// Input: An array of numbers
// Output: An integer that is missing from the input array
// Constraints: O(n) time complexity
// Edge Cases: If the input array has 1 number

/* ** Strategy ** 
First you can iterate through the input array and 
store each number as a key in an object. Then, you can
run a for loop that runs as large as the length
of the input array (from 0 to n). Check each time
if the number is in the object. If it's not, return it!
*/

var missingNumber = (nums) => {
    
};