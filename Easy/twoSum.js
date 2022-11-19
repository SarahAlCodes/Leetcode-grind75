/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


//given two paramters assuming they will always be whole integers
    // nums is an array of numbers
    // target is the expected sum of the two nums
//return the two indices that will equal the target sum when added
    //cant use the same element twice
//examples
    //nums = [2,7,11,15], target = 9 => [0, 1]
    //nums = [3,2,4], target = 6 => [1,2]
//for loop- loop through the array 
    //two nested loops
    //assign i
    //assign j
    //if conditional if i + j === target
    //return [i, j]
*/

const twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++ ){
        if(nums[i] + nums[j] === target)
            return [i , j]
        }
    }
};


//Time complexity: O(n^2) For each element, we try to find its complement by looping through the rest of the array which takes O(n) time. Therefore, the time complexity is O(n^2) 

//Space Complexity: O(1). the space required does not depend on the size of the input array, so only constant space is used.

//Alternative Solution

var twoSums = function (nums, target) {
    // Loop through the numbers
    for (var i = 0; i < nums.length; i++) {
        // Determine the complement (required number) for the current number
        const complement = target - nums[i];

        // Loop through the array again
        for (var x = 0; x < nums.length; x++) {
            // Check if the current number is the first number's complement (and is not the same as the first number)
            if (x != i && nums[x] == complement) {
                // Return both numbers
                return [i, x];
            }
        }
    }
};
