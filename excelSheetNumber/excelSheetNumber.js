// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...

// Example 1:

// Input: "A"
// Output: 1

// Example 2:

// Input: "AB"
// Output: 28

// Example 3:

// Input: "ZY"
// Output: 701

// Input: A string of letters
// Output: An integer (column number)
// Constraints: None
// Edge Cases: If input string is empty

/* ** Strategy ** 
First we can make an object which has the keys as letters and the
values as their corresponding value. Then we can initialize a counter
variable that will keep track of each letter's value. Next, we can initialize
an index variable set to the length of the input string and we decrement everytime
we go to the next character in the string. Then, we can iterate through the 
input string and at each letter, we take the value of the current letter and
add 26 times the number of succeeding letters remaining.
*/

let titleToNumber = (s) => {
    
};