// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. 
// You may complete as many transactions as you like 
// (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time 
// (i.e., you must sell the stock before you buy again).

// Example 1: 
// Input: [7,1,5,3,6,4]
// Output: 7

// Example 2:
// Input: [1,2,3,4,5]
// Output: 4

// Example 3:
// Input: [7,6,4,3,1]
// Output: 0

// Input: An array of integers (stock prices)
// Output: An integer representing max profit possible
// Constraints: None
// Edge Cases: If input array only has 1 number

/* ** Strategy ** 
First can check if the input array's numbers are all sorted
descendingly. Then we know that the max profit is 0. Then, you start iterating
through the array. On each day, you check if the next day is lesser or greater. If the
next day's price is greater, then you buy on the current day, and sell on the next day.
If the next day's price is lesser or equal, then don't buy and wait for the next day. Keep going
until you reach the end of the array. Everytime you buy and sell, add it an output variable
*/

let maxProfit = (prices) => {

}