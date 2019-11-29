// Given a string S, we can transform every letter individually to be lowercase or uppercase 
// to create another string.  
// Return a list of all possible strings we could create.

// Examples:
// Input: S = "a1b2"
// Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

// Input: S = "3z4"
// Output: ["3z4", "3Z4"]

// Input: S = "12345"
// Output: ["12345"]

// Note:

// S will be a string with length between 1 and 12.
// S will consist only of letters or digits.

// Input: A string
// Output: An array of strings
// Constraints: None 
// Edge Cases: None

/* ** Strategy ** 
First you start by pushing the given input string into output array
Then you begin iterating through each character. On each one, you check
if the string with just that current character capitalized is in the output
array. If it isn't, push it in. Then you run a second for loop, where you check
if that current character that is capitalized and any other characters in the 
string capitalized are in the output array. If they aren't you push. You keep
going until you reach the end of the string. Then you return the array. You
may need to build a helper function for this.
*/

let letterCasePermutation = (s) => {
    
};