/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
*/

var search = function(nums, target) {
    let firstEl = nums[0];
    if (firstEl <= target){ 
        for(let i = 0; i < nums.length; i++){
            if (nums[i] === target){
                return i;
            }
        }
    } else { 
        for(let i = nums.length-1; i >= 0; i--){
            if (nums[i] === target){
                return i;
            }
        }
    }
    return -1;
};