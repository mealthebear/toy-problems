// Given a non-empty array of integers, every element appears twice except for one. 
// Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. 
// Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

// Input: An array of integers
// Output: An integer (only appears once)
// Constraints: O(n) run-time
// Edge Cases: None

/* ** Strategy **
Create a variable to store the output integer. Then, create
an object to store the amount of times each element shows up.
Then, iterate through the input array and begin recording the 
occurrences of each element in the object. Once finished iterating
through the array, go through the object and return the key that has
a value of one (only appearing once).
*/

let singleNumber = (nums) => {
    let objTracker = {};
    for (let i = 0; i < nums.length; i++) {
        if (!objTracker[nums[i]]) {
            objTracker[nums[i]] = 1;
        } else {
            objTracker[nums[i]] += 1;
        }
    }
    for (let key in objTracker) {
        if (objTracker[key] === 1) {
            return Number(key);
        }
    }
}