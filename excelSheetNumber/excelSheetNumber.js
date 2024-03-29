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
    let letters = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8,
        "I": 9,
        "J": 10,
        "K": 11,
        "L": 12,
        "M": 13,
        "N": 14,
        "O": 15,
        "P": 16,
        "Q": 17,
        "R": 18,
        "S": 19,
        "T": 20,
        "U": 21,
        "V": 22,
        "W": 23,
        "X": 24,
        "Y": 25,
        "Z": 26
    }
    let power = 0;
    let counter = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        counter += letters[s[i]] * Math.pow(26, power);
        power++;
    }
    return counter;
};