// We have a collection of rocks, each rock has a positive integer weight.

// Each turn, we choose the two heaviest rocks and smash them together.  
// Suppose the stones have weights x and y with x <= y.  The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, 
// and the stone of weight y has new weight y-x.

// At the end, there is at most 1 stone left.  
// Return the weight of this stone (or 0 if there are no stones left.)


// Example 1:

// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

// Note:

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

// Input: An array of integers
// Output: An integer (last stone weight or 0)
// Edge Cases: None

/* ** Strategy ** 
Create a while loop to run as long as there are more than 1 stones
in the input array. On each iteration, sort the array in ascending order
and check the last two stones. If both stones are equal, then pop the array
twice. If they aren't, then pop the array twice and push the value of 
the greater stone minus the lesser stone. Next, if the array has a stone, return
the value of it. If it doesn't, return 0.
*/

let lastStoneWeight = (stones) => {
    while (stones.length > 1) {
        stones.sort();
        if (stones[stones.length - 1] !== stones[stones.length - 2]) {
            let newStone = stones[stones.length - 1] - stones[stones.length - 2];
            stones.pop();
            stones.pop();
            stones.push(newStone);
        } else {
            stones.pop();
            stones.pop();
        }
    }
    return stones.length === 1 ? stones[0] : 0;
}