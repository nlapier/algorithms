/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

You may assume no duplicate exists in the array.
*/

var findMin = function(nums) {
    let minimumElement = nums[0];
    for (let i = 1; i < nums.length; i++){
        if(nums[i] < minimumElement){
            minimumElement = nums[i];
        }
    }
    return minimumElement;
};